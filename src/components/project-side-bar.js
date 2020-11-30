import { ShowProjectFormBtn } from './buttons';
import projectForm from './project-form';

const projectSideBar = () => `
    <h2>Projects</h2>
    ${projectForm()}
    ${ShowProjectFormBtn()}
`;

export default projectSideBar;
