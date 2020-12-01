import styles from '../styles/todo_element.module.css';

const todoElement = todo => {
  const {
    title,
    description,
    priority,
    project,
    dueDate,
  } = todo;

  const year = dueDate.getUTCFullYear();
  const month = dueDate.getUTCMonth() + 1; // Date provides month index; not month number
  const day = dueDate.getUTCDate();
  return `
    <div class="${styles.todoContainer}">
      <div class=${styles.buttons}>
        <i class="fa fa-trash"></i>
        <i class="fa fa-pen"></i>
      </div>
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
      <div>${year}-${month}-${day}</div>
    </div>
    `;
};

const projectToTag = project => {
  const title = project.name;
  const content = project.tasks;
  const isEmpty = content.length === 0;
  const genTags = (title, content) => title + content.map(todoElement).join('');

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
