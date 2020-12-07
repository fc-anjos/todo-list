import {
  deleteTask,
  toggleVisibilityButton,
  handleProjectForm, handleTaskForm,
  toggleProjectSideBar,
} from './event-handlers';

import { updateProjectOptions, editTaskForm } from '../components/task-form';

import drawTodos from '../components/task-element';

const addToggleProjectSideBarEventListener = () => {
  const btn = document.getElementById('collapse-project');
  btn.addEventListener('click', e => toggleProjectSideBar(e));
};

const addTodoFormEventListener = projects => {
  const form = document.getElementById('input-task');
  form.addEventListener('submit', e => handleTaskForm(e, projects));
};

const addProjectFormEventListener = projects => {
  const form = document.getElementById('input-project');
  form.addEventListener('submit', e => handleProjectForm(e, projects));
};

const updateTask = (e, projects) => {
  const projectIndex = e.currentTarget.dataset.project_index;
  const taskIndex = e.currentTarget.dataset.task_index;
  const id = `project${projectIndex}Task${taskIndex}`;
  const taskContainer = document.getElementById(id);
  taskContainer.innerHTML = editTaskForm();
  populateForm();
  addEditFormEventListener();
};

const addEditDeleteEventListener = projects => {
  const editBtns = document.querySelectorAll('.edit-btn');
  const deleteBtns = document.querySelectorAll('.delete-btn');

  Array.from(deleteBtns).forEach(element => {
    element.addEventListener('click', e => {
      const updatedProjects = deleteTask(e, projects);
      drawTodos(updatedProjects);
      addEditDeleteEventListener(updatedProjects);
    });
  });

  Array.from(editBtns).forEach(element => {
    element.addEventListener('click', e => {
      const updatedProjects = updateTask(e, projects);
      // drawTodos(updatedProjects);
    });
  });
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
