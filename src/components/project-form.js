import styles from '../styles/input_project.module.css';

const projectForm = () => `
<h2>Add Project</h2>
<form id="input-project" class="${styles.inputProject}">
  <div>
    <label for="name">Title</label>
    <input type="text" id="name" name="name">
  </div>

  <input type="submit" value="Submit">
</form>`;


export default projectForm;
