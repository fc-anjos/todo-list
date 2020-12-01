import { format } from 'date-fns';
import styles from '../styles/todo_element.module.css';

const todoElement = todo => {
  const {
    title,
    description,
    priority,
    project,
    dueDate,
  } = todo;

  return `
    <div class="${styles.todoContainer}">
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
      <div>${format(dueDate, 'yyyy-MM-dd')}</div>
    </div>
    `;
};

const projectToTag = project => {
  const title = project[1].name;
  const content = project[1].tasks;
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
  const projectEntries = Object.entries(projects);
  const projectTags = projectEntries.map(projectToTag).join('');
  const container = document.getElementById('todo-container');
  container.innerHTML = projectTags;
};

export default drawTodos;
