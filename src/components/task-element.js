import styles from '../styles/todo_element.module.css';

const todoElement = (task, taskIndex, projectIndex) => {
  console.log(taskIndex);
  console.log(projectIndex);
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
    <div class="${styles.todoContainer}">
      <div class=${styles.buttonsContainer}>
        <button class=${styles.button} data-task-index=${taskIndex}>
          <i class="fa fa-trash"></i>
        </button>
        <button class=${styles.button} data-task-index=${taskIndex}>
          <i class="fa fa-pen"></i>
        </button>
      </div>
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
      <div>${year}-${month}-${day}</div>
    </div>
    `;
};

const projectToTag = (project, projectIndex) => {
  const title = project.name;
  const content = project.tasks;
  const isEmpty = content.length === 0;
  const genTags = (title, content) => title + content.map((task, taskIndex) => todoElement(task, taskIndex, projectIndex)).join('');

  if (isEmpty) {
    return `
     <div>
       <i>
         Project ${title} has no todos
       </i>
     </div>
     `;
  }
  return genTags(title, content);
};

const drawTodos = projects => {
  const projectTags = projects.map(projectToTag).join('');
  const container = document.getElementById('todo-container');
  container.innerHTML = projectTags;
};

export default drawTodos;
