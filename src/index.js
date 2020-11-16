import inputTodo from './components/input_todo';
import todoElement from './components/todo_element';

const todo = object => ({
  toHtml: () => todoElement(object),
});

const todoArray = [];

const handleForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  const newTodo = todo(object);
  todoArray.push(newTodo);
  drawTodos(todoArray);
};

const drawTodo = (accumulator, item) => accumulator + item.toHtml();

const drawTodos = todoArray => {
  const allTodos = todoArray.reduce(drawTodo, '');
  document.getElementById('todo-container').innerHTML = allTodos;
};

const formFunctionality = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => handleForm(e));
};

const todoContainer = () => `
  <div id="todo-container"></div>
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML += inputTodo();
  content.innerHTML += todoContainer();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  formFunctionality();
  drawTodos(todoArray);
});
