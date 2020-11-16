import inputTodo from './components/input_todo';
import todoElement from './components/todo_element';
import todoContainer from './components/todo_container';

const todo = object => ({
  toHtml: () => todoElement(object),
});

const todoArray = [];

const drawTodo = (accumulator, item) => accumulator + item.toHtml();

const drawTodos = todoArray => {
  const allTodos = todoArray.reduce(drawTodo, '');
  document.getElementById('todo-container').innerHTML = allTodos;
};

const handleForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  const newTodo = todo(object);
  todoArray.push(newTodo);
  drawTodos(todoArray);
};

const formFunctionality = () => {
  const form = document.getElementById('input-todo');
  form.addEventListener('submit', e => handleForm(e));
};

const addTodoBtn = () => `
  <button id="add-new-todo" class="btn">Add new Todo</button>
`;

function toggleVisibility(targetID) {
  const el = document.getElementById(targetID);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

const toggleVisibilityButton = (btnID, targetID) => {
  const btn = document.getElementById(btnID);
  btn.addEventListener('click', () => toggleVisibility(targetID));
  return btn.outerHTML;
};

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML += inputTodo();
  content.innerHTML += todoContainer();
  content.innerHTML += addTodoBtn();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  formFunctionality();
  drawTodos(todoArray);
  toggleVisibilityButton('add-new-todo', 'input-todo');
});
