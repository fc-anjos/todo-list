import project from '../project';
import projects from '../projects';
import drawTodos from '../components/task-element';
import { updateProjectOptions } from '../components/task-form';
import {
  hideEl, showEl, toggleVisibilityButton, toggleEl,
} from './show-hide';

const toggleProjectSideBar = () => {
  toggleEl('project-side-bar');
};


const deleteTask = e => {
  const projectIndex = e.currentTarget.dataset.project_index;
  const taskIndex = e.currentTarget.dataset.task_index;
  projects[projectIndex].tasks.splice(taskIndex, 1);
};

const addEditDeleteEventListener = projects => {
  const edit_btns = document.querySelectorAll('.edit-btn');
  const deleteBtns = document.querySelectorAll('.delete-btn');

  Array.from(deleteBtns).forEach(element => {
    element.addEventListener('click', e => {
      deleteTask(e);
      drawTodos(projects);
      addEditDeleteEventListener(projects);
    });
  });
};

const handleTaskForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  projects[taskInfo.projectIndex].createTask(taskInfo);
  hideEl('task-form-container');
  showEl('add-new-task');
  drawTodos(projects);
  e.target.reset();
};

const handleProjectForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  if (!projects[object.name]) {
    projects[object.name] = project(object.name);
  }
  updateProjectOptions(projects);
  hideEl('project-form-container');
  showEl('add-new-project');
  drawTodos(projects);
  e.target.reset();
};


const addToggleProjectSideBarEventListener = () => {
  const btn = document.getElementById('collapse-project');
  btn.addEventListener('click', e => toggleProjectSideBar(e));
};

const addTodoFormEventListener = () => {
  const form = document.getElementById('input-task');
  form.addEventListener('submit', e => handleTaskForm(e));
};

const addProjectFormEventListener = () => {
  const form = document.getElementById('input-project');
  form.addEventListener('submit', e => handleProjectForm(e));
};

const addAllEventListeners = () => {
  updateProjectOptions(projects);
  drawTodos(projects);
  addEditDeleteEventListener(projects);
  addTodoFormEventListener();
  addProjectFormEventListener();
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

export default addAllEventListeners;
