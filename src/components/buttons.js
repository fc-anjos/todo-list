import styles from '../styles/buttons.module.css';

const ShowTodoFormBtn = () => `
  <button id="add-new-todo" class="${styles.add}">Add new Todo</button>
`;

const ShowProjectFormBtn = () => `
  <button id="add-new-project" class="${styles.add}">Add new Project</button>
`;

const HideProjectFormBtn = () => `
  <button id="hide-new-project" class="${styles.hide}">X</button>
`;

const HideTodoFormBtn = () => `
  <button id="hide-new-todo" class="${styles.hide}">X</button>
`;

export {
  ShowProjectFormBtn,
  ShowTodoFormBtn,
  HideTodoFormBtn,
  HideProjectFormBtn,
};
