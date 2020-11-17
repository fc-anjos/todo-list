import { todoForm } from './components/todo-form';
import { ProjectBtn, TodoBtn } from './components/buttons';
import projectForm from './components/project-form';
import todoContainer from './components/todo-container';
import addAllEventListeners from './utils/event-listeners';


const home = () => `
  ${todoForm()}
  ${projectForm()}
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
