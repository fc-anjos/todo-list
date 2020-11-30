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
  ${HideTaskFormBtn()}
  <form id="input-task" class="${styles.form}">
    <div class="${styles.formFields}">

      <div>
        <label class="${styles.label}" for="title">Title</label>
        <input type="text" id="title" name="title">
      </div>

      <div>
        <label class="${styles.label}" for="description">Description</label>
        <input type="text" id="description" name="description">
      </div>

      <div>
        <label class="${styles.label}" for="priority">Priority</label>
        <input type="number" id="number" name="priority">
      </div>

      <div>
        <label class="${styles.label}" for="project">Project</label>
        <select name="project" id="project-select">
        </select>
      </div>
    </div>
    <input type="submit" value="Submit">
  </form>
</div>
`;
export { taskForm, updateProjectOptions };
