import { formContent } from '../task-form';
import styles from './task-edit.module.css';

const editTaskTag = taskInfo => {
  const { projectIndex, taskIndex } = taskInfo;
  return `
  <div class=${styles.rowContainer} id="project${projectIndex}Task${taskIndex}">
    <div class=${styles.buttonsContainer}>
      <i class="fa fa-window-close"></i>
    </div>
    <div
      class="${styles.editTaskContainer}">
      <form class="${styles.form}"
       data-task_index=${taskIndex}
       data-project_index=${projectIndex}>
      <input type="hidden" id="taskIndex" name="taskIndex" value="${taskIndex}">
        ${formContent()}
      </form>
    </div>
  </div>
`;
};

const editTask = taskInfo => {
  const template = document.createElement('template');
  template.innerHTML = editTaskTag(taskInfo);
  const form = taskContainer.querySelector('form');
  // populateForm(form, task, projects);
  // form.addEventListener('submit', e => {
  // handleEditTaskForm(e, projects);
  // });
  return template.content;
};

export default editTask;
