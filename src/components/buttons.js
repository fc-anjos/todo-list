import styles from '../styles/buttons.module.css';

const ShowTaskFormBtn = () => `
  <button id="add-new-task" class="${styles.add}">Add new Task</button>
`;

const ShowProjectFormBtn = () => `
  <button id="add-new-project" class="${styles.add}">Add new Project</button>
`;

const HideProjectFormBtn = () => `
  <button id="hide-new-project" class="${styles.hide}">X</button>
`;

const HideTaskFormBtn = () => `
  <button id="hide-new-task" class="${styles.hide}">X</button>
`;

export {
  ShowProjectFormBtn,
  ShowTaskFormBtn,
  HideTaskFormBtn,
  HideProjectFormBtn,
};
