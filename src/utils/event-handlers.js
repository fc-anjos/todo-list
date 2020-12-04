import project from '../project';
import drawTodos from '../components/task-element';
import {
  hideEl, showEl, toggleVisibilityButton, toggleEl,
} from './show-hide';

import { updateProjectOptions } from '../components/task-form';

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
    updateProjectOptions(updatedProjects);
  }
  hideEl('project-form-container');
  showEl('add-new-project');
  e.target.reset();
};


export {
  deleteTask,
  toggleVisibilityButton,
  handleProjectForm,
  handleTaskForm,
  toggleProjectSideBar,
};
