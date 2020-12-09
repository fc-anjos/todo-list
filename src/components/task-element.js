import styles from '../styles/task_element.module.css';

import { updateProjectOptions } from './task-form';

import mergeNodes from '../utils/merge-nodes';

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

const todoElement = (task, taskIndex, projectIndex) => {
  const fragment = new DocumentFragment();
  fragment.innerHTML = todoTag(task, taskIndex, projectIndex);
  return fragment;
};

const taskElements = (title, content, projectIndex) => {
  const fragment = new DocumentFragment();
  // fragment.innerHTML = title;
  const todoElements = content.map((task, taskIndex) => todoElement(task, taskIndex, projectIndex));
  const todoElementsContainer = mergeNodes(todoElements);
  fragment.appendChild(todoElementsContainer);
  return fragment;
};

// Takes a project and converts it in an array of tasks tags
const projectElement = (project, projectIndex) => {
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
    fragment.appendChild(taskElements(title, content, projectIndex));
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
