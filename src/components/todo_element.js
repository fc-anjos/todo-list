import styles from '../styles/todo_element.module.css';

const todoElement = todo => {
  const {
    title,
    description,
    priority,
    project,
  } = todo;

  return `
    <div class="${styles.todoContainer}">
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
    </div>
    `;
};


const projectToTag = project => {
  const title = project[0];
  const content = project[1];
  const isEmpty = content.length === 0;
  const genTags = (title, content) => title + content.map(todoElement).join('');

  if (isEmpty) {
    return `
    <div>
      Project ${title} has no todos
    </div>
    `;
  }
  return genTags(title, content);
};

const drawTodos = projects => {
  const projectsEntries = Object.entries(projects);
  const projectTags = projectsEntries.map(projectToTag).join('');
  const container = document.getElementById('todo-container');
  container.innerHTML = projectTags;
};

export default drawTodos;
