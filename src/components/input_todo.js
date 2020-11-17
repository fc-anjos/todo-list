import styles from '../styles/input_todo.module.css';

const projectOption = projectName => `
<option value="${projectName}">${projectName}</option>
`;

const projectOptions = (accumulator,
  projectName) => accumulator + projectOption(projectName);

const updateProjectOptions = projectNames => {
  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = projectNames.reduce(projectOptions, '');
};

const inputTodo = () => `
<h2>Add Todo</h2>
<form id="input-todo" class="${styles.inputTodo}">
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
</form>`;


export { inputTodo, updateProjectOptions };
