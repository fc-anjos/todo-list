import styles from '../styles/task_element.module.css';

import { projectOption, editTaskForm } from './task-form';

import mergeNodes from '../utils/merge-nodes';

const taskTag = (task, taskIndex, projectIndex) => {
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

const drawTodos = projects => {
  const container = document.getElementById('todo-container');
  const projectElements = projects.map(projectElement);
  container.innerHTML = '';
  container.appendChild(mergeNodes(projectElements));
};


const taskElement = (task, taskIndex, projectIndex, projects) => {
  const fragment = new DocumentFragment();
  const div = document.createElement('div');
  div.innerHTML = taskTag(task, taskIndex, projectIndex);
  const editBtn = div.querySelector('.edit-btn');
  editBtn.addEventListener('click', () => {
    updateTask(task, taskIndex, projectIndex, projects);
  });
  fragment.appendChild(div);
  return fragment;
};

const DOMReplaceTask = (task, taskIndex, projectIndex, projects) => {
  const container = document.querySelector(`#project${projectIndex}Task${taskIndex}`);
  const newTaskElement = taskElement(task, taskIndex, projectIndex, projects);
  container.replaceWith(newTaskElement);
};

const handleEditTaskForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const { projectIndex, taskIndex } = taskInfo;
  const project = projects[projectIndex];
  const updatedProject = project.replaceTask(taskInfo);
  const newTask = updatedProject.tasks[taskInfo.taskIndex];
  DOMReplaceTask(newTask, taskIndex, projectIndex, projects);
};


const updateTask = (task, taskIndex, projectIndex, projects) => {
  const id = `project${projectIndex}Task${taskIndex}`;
  const taskContainer = document.getElementById(id);
  taskContainer.innerHTML = editTaskForm({ projectIndex, taskIndex });
  const form = taskContainer.querySelector('form');
  populateForm(form, task, projects);
  form.addEventListener('submit', e => {
    handleEditTaskForm(e, projects);
  });
};

const taskElements = (content, projectIndex, projects) => {
  const fragment = new DocumentFragment();
  const taskElements = content.map(
    (task, taskIndex) => taskElement(task, taskIndex, projectIndex, projects),
  );
  const taskElementsContainer = mergeNodes(taskElements);
  fragment.appendChild(taskElementsContainer);
  return fragment;
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
    fragment.appendChild(taskElements(content, projectIndex, projects));
  }
  return fragment;
};


export default drawTodos;
