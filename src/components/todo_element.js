import styles from '../styles/todo_element.module.css';

const todoElement = ({
  title,
  description,
  priority,
  project,
}) => `
    <div class="${styles.todoContainer}">
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
    </div>
    `;

const todo = ({
  title, description, priority, project,
}) => {
  const toHtml = () => todoElement({
    title, description, priority, project,
  });

  return {
    title, description, priority, project, toHtml,
  };
};

const tagsReducer = project => `${project}`;

const projectToTag = project => project[0] + project[1].map(todoElement).reduce(tagsReducer)[0];

const drawTodos = projects => {
  const projectsEntries = Object.entries(projects);
  const projectTags = projectsEntries.map(projectToTag);
  console.log(projectTags);
};

export { drawTodos, todo };
