import project from './project';

const defaultTask = ({
  title: 'Default Task',
  description: 'Default Description',
  priority: '1',
  project: 'Default Project',
  dateString: '2020-12-10',
});

const defaultProject = project('default');

defaultProject.createTask(defaultTask);
const projects = [defaultProject];

export default projects;
