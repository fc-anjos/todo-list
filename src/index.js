import { taskForm } from './components/task-form';
import {
  ShowTaskFormBtn,
  ShowProjectFormBtn,
} from './components/buttons';
import projectForm from './components/project-form';
import taskContainer from './components/task-container';
import addAllEventListeners from './utils/event-listeners';

const home = () => `
  ${taskForm()}
  ${projectForm()}
  ${ShowProjectFormBtn()}
  ${ShowTaskFormBtn()}
  ${taskContainer()}
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = home();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addAllEventListeners();
});
