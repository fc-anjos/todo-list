import project from '../project';
import drawTodos from '../components/task-element';
import {
  hideEl, showEl, toggleVisibilityButton, toggleEl,
} from './show-hide';

import { updateDOMWithProjects } from './add-event-listeners';

const toggleProjectSideBar = () => {
  toggleEl('project-side-bar');
};

const deleteTask = (e, projects) => {
  const projectIndex = e.currentTarget.dataset.project_index;
  const taskIndex = e.currentTarget.dataset.task_index;
  const updatedProjects = projects;
  updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
  return updatedProjects;
};

const addEditDeleteEventListener = projects => {
  const edit_btns = document.querySelectorAll('.edit-btn');
  const deleteBtns = document.querySelectorAll('.delete-btn');

  Array.from(deleteBtns).forEach(element => {
    element.addEventListener('click', e => {
      const updatedProjects = deleteTask(e, projects);
      updateDOMWithProjects(updatedProjects);
    });
  });
};

const handleTaskForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  projects[taskInfo.projectIndex].createTask(taskInfo);
  hideEl('task-form-container');
  showEl('add-new-task');
  drawTodos(projects);
  e.target.reset();
};

const handleProjectForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  if (!projects[object.name]) {
    const updatedProjects = projects;
    updatedProjects[object.name] = project(object.name);
    updateDOMWithProjects(updatedProjects);
  }
  hideEl('project-form-container');
  showEl('add-new-project');
  e.target.reset();
};


export {
  addEditDeleteEventListener,
  toggleVisibilityButton,
  handleProjectForm,
  handleTaskForm,
  toggleProjectSideBar,
};
