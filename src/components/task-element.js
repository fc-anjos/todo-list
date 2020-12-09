import styles from '../styles/task_element.module.css';

import { projectOption, editTaskForm } from './task-form';
import { hideEl, showEl } from '../utils/show-hide';

import mergeNodes from '../utils/merge-nodes';

const handleEditTaskForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const project = projects[taskInfo.projectIndex];
  const updatedProject = project.replaceTask(taskInfo);
  const updatedProjects = projects;
  updatedProjects[taskInfo.projectIndex] = updatedProject;
  hideEl('task-form-container');
  showEl('add-new-task');
  return updatedProjects;
};
const todoTag = (task, taskIndex, projectIndex) => {
  const {
    title,
    description,
    priority,
    project,
    dueDate,
  } = task;

  const year = dueDate.getUTCFullYear();
  const month = dueDate.getUTCMonth() + 1; // Date provides month index; not month number
  const day = dueDate.getUTCDate();
  return `
  <div class="${styles.todoContainer}" id="project${projectIndex}Task${taskIndex}">
    <div class=${styles.buttonsContainer}>
      <button class="${styles.button} delete-btn"
        data-task_index=${taskIndex}
        data-project_index=${projectIndex}
        >
        <i class="fa fa-trash"></i>
      </button>
      <button class="${styles.button} edit-btn"
        data-task_index=${taskIndex}
        data-project_index=${projectIndex}
        >
        <i class="fa fa-pen"></i>
      </button>
    </div>
    <div>${title}</div>
    <div>${description}</div>
    <div>${priority}</div>
    <div>${project}</div>
    <div>${year}-${month}-${day}</div>
  </div>
`;
};

const populateForm = (form, task, projects) => {
  const titleField = form.querySelector('#title');
  titleField.value = task.title;

  const descriptionField = form.querySelector('#description');
  descriptionField.value = task.description;

  const priorityField = form.querySelector('#priority');
  priorityField.value = task.priority;

  const dateStringField = form.querySelector('#dateString');
  dateStringField.value = task.formattedDate();

  const projectField = form.querySelector('#project-select');
  projectField.innerHTML = projects.map(projectOption).join('');
};

const updateTask = (task, taskIndex, projectIndex, projects) => {
  const id = `project${projectIndex}Task${taskIndex}`;
  const taskContainer = document.getElementById(id);
  taskContainer.innerHTML = editTaskForm({ projectIndex, taskIndex });
  const form = taskContainer.querySelector('form');
  populateForm(form, task, projects);
  form.addEventListener('submit', e => {
    const updatedProjects = handleEditTaskForm(e, projects);
    drawTodos(updatedProjects);
    addEditDeleteEventListener(updatedProjects);
  });
};

const todoElement = (task, taskIndex, projectIndex, projects) => {
  const fragment = new DocumentFragment();
  const div = document.createElement('div');
  div.innerHTML = todoTag(task, taskIndex, projectIndex);
  const editBtn = div.querySelector('.edit-btn');
  editBtn.addEventListener('click', () => {
    updateTask(task, taskIndex, projectIndex, projects);
  });
  fragment.appendChild(div);
  return fragment;
};

const taskElements = (title, content, projectIndex, projects) => {
  const fragment = new DocumentFragment();
  // fragment.innerHTML = title;
  const todoElements = content.map((task, taskIndex) => todoElement(task, taskIndex, projectIndex, projects));
  const todoElementsContainer = mergeNodes(todoElements);
  fragment.appendChild(todoElementsContainer);
  return fragment;
};

// Takes a project and converts it in an array of tasks tags
const projectElement = (project, projectIndex, projects) => {
  const fragment = new DocumentFragment();
  const title = project.name;
  const content = project.tasks;
  const isEmpty = content.length === 0;

  if (isEmpty) {
    fragment.innerHTML = `
     <div>
       <i>
         Project ${title} has no todos
       </i>
     </div>
     `;
  } else {
    fragment.appendChild(taskElements(title, content, projectIndex, projects));
  }
  return fragment;
};


const drawTodos = projects => {
  const container = document.getElementById('todo-container');
  const projectElements = projects.map(projectElement);
  container.innerHTML = '';
  container.appendChild(mergeNodes(projectElements));
  // updateProjectOptions(projects);
};


export default drawTodos;
