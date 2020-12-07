import styles from '../styles/input_todo.module.css';
import { HideTaskFormBtn } from './buttons';

const projectOption = project => `
    <option value="${project.index}">${project.name}</option>
`;

const projectOptions = (accumulator,
  projectName) => accumulator + projectOption(projectName);

// const updateProjectOptions = projects => {
//   const projectNames = projects.map((project, index) => ({ index, name: project.name }));
//   const projectSelect = document.getElementById('project-select');
//   projectSelect.innerHTML = projectNames.reduce(projectOptions, '');
// };


const formContent = projects => {
  console.log(projects);
  return `
  <div class="${styles.formFields}">

    <div class="${styles.formField}">
      <label class="${styles.label}" for="title">Title</label>
      <input type="text" id="title" name="title">
    </div>

    <div class="${styles.formField}">
      <label class="${styles.label}" for="description">Description</label>
      <input type="text" id="description" name="description">
    </div>

    <div class="${styles.formField}">
      <label class="${styles.label}" for="priority">Priority</label>
      <input type="number" id="priority" name="priority">
    </div>

    <div class="${styles.formField}">
      <label class="${styles.label}" for="projectIndex">Project</label>
      <select name="projectIndex" id="project-select">
      </select>
    </div>

    <div class="${styles.formField}">
      <label class="${styles.label}" for="dateString">Due Date</label>
      <input type="date" id="dateString" name="dateString">
      </select>
    </div>

  </div>
  <input type="submit" value="Submit">
`;
};

const editTaskForm = (taskInfo, projects) => {
  const { projectIndex, taskIndex } = taskInfo;
  return `
  <div
    class="${styles.editTaskContainer}">
    <form class="${styles.form}"
     data-task_index=${taskIndex}
     data-project_index=${projectIndex}>
      ${formContent(projects)}
    </form>
  </div>
`;
};

const createTaskForm = projects => `
  <div id="task-form-container" class="${styles.inputTodo}">
    ${HideTaskFormBtn()}
    <form id="input-task" class="${styles.form}">
      ${formContent(projects)}
    </form>
  </div>
`;

export { createTaskForm, editTaskForm };
