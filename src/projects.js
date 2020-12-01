import project from './project';

const defaultTask = ({
  title: 'First Task',
  description: 'First Description',
  priority: '0',
  project: 'teste',
  dateString: '2020-12-10',
});

const defaultProject = project('default');

defaultProject.createTask(defaultTask);
const projects = { defaultProject };

export default projects;
