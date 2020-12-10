import {
  deleteTask,
  toggleVisibilityButton,
  handleProjectForm,
  handleCreateTaskForm,
  toggleProjectSideBar,
} from './event-handlers';

import { updateProjectOptions } from '../components/task-form';

import drawTodos from '../components/task-element';

const addToggleProjectSideBarEventListener = () => {
  const btn = document.getElementById('collapse-project');
  btn.addEventListener('click', e => toggleProjectSideBar(e));
};

const addEditDeleteEventListener = projects => {
  const deleteBtns = document.querySelectorAll('.delete-btn');

  Array.from(deleteBtns).forEach(element => {
    element.addEventListener('click', e => {
      const updatedProjects = deleteTask(e, projects);
      drawTodos(updatedProjects);
      addEditDeleteEventListener(updatedProjects);
    });
  });
};

const addTodoFormEventListener = projects => {
  const form = document.getElementById('input-task');
  form.addEventListener('submit', e => {
    const updatedProjects = handleCreateTaskForm(e, projects);
    drawTodos(updatedProjects);
    addEditDeleteEventListener(updatedProjects);
  });
};

const addProjectFormEventListener = projects => {
  const form = document.getElementById('input-project');
  form.addEventListener('submit', e => handleProjectForm(e, projects));
};

const addStaticEventListeners = () => {
  addToggleProjectSideBarEventListener();

  toggleVisibilityButton({
    showBtnId: 'add-new-task',
    hideBtnId: 'hide-new-task',
    targetId: 'task-form-container',
  });

  toggleVisibilityButton({
    showBtnId: 'add-new-project',
    hideBtnId: 'hide-new-project',
    targetId: 'project-form-container',
  });
};

const updateDOMWithProjects = projects => {
  updateProjectOptions(projects);
  drawTodos(projects);
  addEditDeleteEventListener(projects);
  addTodoFormEventListener(projects);
  addProjectFormEventListener(projects);
};

export { updateDOMWithProjects, addStaticEventListeners };
