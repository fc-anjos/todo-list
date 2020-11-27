import { ShowProjectFormBtn } from './buttons';
import projectForm from './project-form';

const projectSideBar = () => `
  <div>'project-side-bar.js'</div>
  ${projectForm()}
  ${ShowProjectFormBtn()}
`;

export default projectSideBar;
