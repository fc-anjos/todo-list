import { HideProjectFormBtn } from './buttons';
import styles from '../styles/input_project.module.css';

const projectForm = () => `
<div id="project-form-container"  class="${styles.inputProject}">
  <h2>Add Project</h2>
  ${HideProjectFormBtn()}
  <form id="input-project">
    <div>
      <label for="name">Title</label>
      <input type="text" id="name" name="name">
    </div>

    <input type="submit" value="Submit">
  </form>
</div>
`;


export default projectForm;
