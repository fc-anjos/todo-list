import styles from '../styles/todo_element.module.css';

const todoElement = todoObject => {
  const { title, description, priority } = todoObject;
  return `
    <div class="${styles.todoContainer}">
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
    </div>
    `;
};

export default todoElement;
