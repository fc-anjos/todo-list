import styles from './styles/index.module.css';
import { taskForm } from './components/task-form';
import { ShowTaskFormBtn } from './components/buttons';
import taskContainer from './components/task-container';
import addAllEventListeners from './utils/event-listeners';
import header from './components/header';
import projectSideBar from './components/project-side-bar';
import toggleProjectSideBarButton from './components/toggle-project-sidebar-button';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const home = () => `
  <div class=${styles.container}>

    <div class=${styles.sidebar} id="project-side-bar">
      ${projectSideBar()}
    </div>

    <div class=${styles.toggleSidebarContainer}>
      ${toggleProjectSideBarButton()}
    </div>

    <div class=${styles.main}>
      ${header()}
      <div class=${styles.tasksInner}>
        ${taskContainer()}
        ${taskForm()}
        ${ShowTaskFormBtn()}
      </div>
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
