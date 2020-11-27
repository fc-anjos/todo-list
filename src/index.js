import styles from './styles/index.module.css';
import { taskForm } from './components/task-form';
import { ShowTaskFormBtn } from './components/buttons';
import taskContainer from './components/task-container';
import addAllEventListeners from './utils/event-listeners';
import header from './components/header';
import projectSideBar from './components/project-side-bar';

const home = () => `
  <div class=${styles.container}>
    <div class=${styles.sidebar}>
      ${projectSideBar()}
    </div>
    <div class=${styles.main}>
      ${header()}
      ${taskContainer()}
      ${taskForm()}
      ${ShowTaskFormBtn()}
    </div>
  </div>
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = home();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addAllEventListeners();
});
