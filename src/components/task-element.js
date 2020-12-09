import styles from '../styles/task_element.module.css';

import { updateProjectOptions } from './task-form';

const todoElement = (task, taskIndex, projectIndex) => {
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


const genTags = (title, content, projectIndex) => title + content.map((task, taskIndex) => todoElement(task, taskIndex, projectIndex)).join('');

// Takes a project and converts it in an array of tasks tags
const projectToTag = (project, projectIndex) => {
  const title = project.name;
  const content = project.tasks;
  const isEmpty = content.length === 0;

  if (isEmpty) {
    return `
     <div>
       <i>
         Project ${title} has no todos
       </i>
     </div>
     `;
  }
  return genTags(title, content, projectIndex);
};


const drawTodos = projects => {
  const projectTags = projects.map(projectToTag).join('');
  const container = document.getElementById('todo-container');
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', projectTags);
  updateProjectOptions(projects);
};


export default drawTodos;
