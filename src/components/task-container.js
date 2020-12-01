import styles from '../styles/task-container.module.css';

const taskContainer = () => `
  <div class="${styles.header}">
    <div>Title</div>
    <div>Description</div>
    <div>Priority</div>
    <div>Project</div>
    <div>Due Date</div>
  </div>
  <div id="todo-container" class="${styles.todoContainer}"></div>
`;

export default taskContainer;
