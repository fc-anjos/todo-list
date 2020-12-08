import project from '../project';
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

const handleCreateTaskForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const updatedProjects = projects;
  updatedProjects[taskInfo.projectIndex].createTask(taskInfo);
  hideEl('task-form-container');
  showEl('add-new-task');
  e.target.reset();
  return updatedProjects;
};

const handleEditTaskForm = (e, projects) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const project = projects[taskInfo.projectIndex];
  const updatedProject = project.replaceTask(taskInfo);
  const updatedProjects = projects;
  updatedProjects[taskInfo.projectIndex] = updatedProject;
  hideEl('task-form-container');
  showEl('add-new-task');
  return updatedProjects;
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
  handleCreateTaskForm,
  handleEditTaskForm,
  toggleProjectSideBar,
};
