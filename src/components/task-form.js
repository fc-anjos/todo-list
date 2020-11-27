import styles from '../styles/input_todo.module.css';
import { HideTaskFormBtn } from './buttons';

const projectOption = projectName => `
<option value="${projectName}">${projectName}</option>
`;

const projectOptions = (accumulator,
  projectName) => accumulator + projectOption(projectName);

const updateProjectOptions = projectNames => {
  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = projectNames.reduce(projectOptions, '');
};

const taskForm = () => `
<div id="task-form-container" class="${styles.inputTodo}">
  <h2>Add Todo</h2>
  ${HideTaskFormBtn()}
  <form id="input-task">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title">
    </div>

    <div>
      <label for="description">Description</label>
      <input type="text" id="description" name="description">
    </div>

    <div>
      <label for="priority">Priority</label>
      <input type="number" id="number" name="priority">
    </div>

    <div>
      <label for="project">Project</label>
      <select name="project" id="project-select">
      </select>
    </div>

    <input type="submit" value="Submit">
  </div>
</form>`;


export { taskForm, updateProjectOptions };
