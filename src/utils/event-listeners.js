import todo from '../todo';
import drawTodos from '../components/todo_element';
import { updateProjectOptions } from '../components/input_todo';


const projects = { default: [] };

const handleTodoForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  const newTodo = todo(object);
  projects[object.project].push(newTodo);
  drawTodos(projects);
};

const handleProjectForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  if (projects[object.name] !== []) {
    projects[object.name] = [];
  }
  updateProjectOptions(Object.keys(projects));
  drawTodos(projects);
};

const showEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'block';
};

const hideEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'none';
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
  const form = document.getElementById('input-todo');
  form.addEventListener('submit', e => handleTodoForm(e));
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
    showBtnId: 'add-new-todo',
    hideBtnId: 'hide-new-todo',
    targetId: 'todo-form-container',
  });

  toggleVisibilityButton({
    showBtnId: 'add-new-project',
    hideBtnId: 'hide-new-project',
    targetId: 'project-form-container',
  });
};

export default addAllEventListeners;
