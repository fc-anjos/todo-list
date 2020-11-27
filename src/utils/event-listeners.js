import task from '../task';
import project from '../project';
import projects from '../projects';
import drawTodos from '../components/task-element';
import { updateProjectOptions } from '../components/task-form';

const showEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'block';
};

const hideEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'none';
};

const handleTaskForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const newTodo = task(taskInfo);
  projects[taskInfo.project].appendTask(newTodo);
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
  updateProjectOptions(Object.keys(projects));
  hideEl('project-form-container');
  showEl('add-new-project');
  drawTodos(projects);
  e.target.reset();
};

const toggleVisibilityButton = ({
  showBtnId,
  hideBtnId,
  targetId,
}) => {
  const showBtn = document.getElementById(showBtnId);
  showBtn.addEventListener('click', () => {
    showEl(targetId);
    showEl(hideBtnId);
    hideEl(showBtnId);
  });

  const hideBtn = document.getElementById(hideBtnId);
  hideBtn.addEventListener('click', () => {
    hideEl(targetId);
    hideEl(hideBtnId);
    showEl(showBtnId);
  });
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
  updateProjectOptions(Object.keys(projects));
  drawTodos(projects);

  addTodoFormEventListener();
  addProjectFormEventListener();

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
