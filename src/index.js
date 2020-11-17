import { inputTodo } from './components/input_todo';
import inputProject from './components/input_project';
import todoContainer from './components/todo_container';
import addAllEventListeners from './utils/event_listeners';

const TodoBtn = () => `
  <button id="add-new-todo" class="btn">Add new Todo</button>
`;

const ProjectBtn = () => `
  <button id="add-new-project" class="btn">Add new Project</button>
`;

const home = () => `
  ${inputTodo()}
  ${inputProject()}
  ${TodoBtn()}
  ${ProjectBtn()}
  ${todoContainer()}
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = home();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addAllEventListeners();
});
