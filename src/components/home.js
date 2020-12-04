import styles from '../styles/index.module.css';
import projectSideBar from './project-side-bar';
import toggleProjectSideBarButton from './toggle-project-sidebar-button';
import header from './header';
import taskContainer from './task-container';
import { ShowTaskFormBtn } from './buttons';
import { taskForm } from './task-form';

const homeTag = () => `
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

const home = () => {
  const content = document.getElementById('content');
  content.innerHTML = homeTag();
};

export default home;
