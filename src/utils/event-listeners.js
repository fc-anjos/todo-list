import todo from '../todo';
import drawTodos from '../components/todo_element';
import { updateProjectOptions } from '../components/input_todo';

const projects = {};

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

function toggleVisibility(targetID) {
  const el = document.getElementById(targetID);
  el.style.display = (el.style.display === 'none'
                      || el.style.display === '') ? 'block' : 'none';
}

const toggleVisibilityButton = ({ btnId, targetId }) => {
  const btn = document.getElementById(btnId);
  btn.addEventListener('click', () => toggleVisibility(targetId));
  return btn.outerHTML;
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
  addTodoFormEventListener();
  addProjectFormEventListener();
  toggleVisibilityButton({ btnId: 'add-new-todo', targetId: 'input-todo' });
  toggleVisibilityButton({ btnId: 'add-new-project', targetId: 'input-project' });
};

export default addAllEventListeners;
