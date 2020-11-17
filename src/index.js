import { inputTodo, updateProjectOptions } from './components/input_todo';
import inputProject from './components/input_project';
import { todo, drawTodos } from './components/todo_element';
import todoContainer from './components/todo_container';


const todoArray = [];
const projects = {};

const handleTodoForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  const newTodo = todo(object);
  todoArray.push(newTodo);
  drawTodos(todoArray);
};


const handleProjectForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  if (projects[object.name] !== []) {
    projects[object.name] = [];
  }
  updateProjectOptions(Object.keys(projects));
};

const addTodoFormEventListener = () => {
  const form = document.getElementById('input-todo');
  form.addEventListener('submit', e => handleTodoForm(e));
};


const addProjectFormEventListener = () => {
  const form = document.getElementById('input-project');
  form.addEventListener('submit', e => handleProjectForm(e));
};

const addTodoBtn = () => `
  <button id="add-new-todo" class="btn">Add new Todo</button>
`;

const addProjectBtn = () => `
  <button id="add-new-project" class="btn">Add new Project</button>
`;

function toggleVisibility(targetID) {
  const el = document.getElementById(targetID);
  el.style.display = (el.style.display === 'none'
                      || el.style.display === '') ? 'block' : 'none';
}

const toggleVisibilityButton = ({ btnId, targetId }) => {
  const btn = document.getElementById(btnId);
  btn.addEventListener('click', () => toggleVisibility(targetId));
  return btn.outerHTML;
};

const addAllEventListeners = () => {
  addTodoFormEventListener();
  addProjectFormEventListener();
  toggleVisibilityButton({ btnId: 'add-new-todo', targetId: 'input-todo' });
  toggleVisibilityButton({ btnId: 'add-new-project', targetId: 'input-project' });
};

const home = () => `
  ${inputTodo()}
  ${inputProject()}
  ${addTodoBtn()}
  ${addProjectBtn()}
  ${todoContainer()}
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = home();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addAllEventListeners();
  drawTodos(todoArray);
  updateProjectOptions(Object.keys(projects));
});
