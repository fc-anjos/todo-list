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

const todo = object => ({
  toHtml: () => todoElement(object),
});

const todoHtmlReducer = (accumulator, todo) => accumulator + todo.toHtml();

const drawTodos = todoArray => {
  const allTodos = todoArray.reduce(todoHtmlReducer, '');
  document.getElementById('todo-container').innerHTML = allTodos;
};

export { drawTodos, todo };
