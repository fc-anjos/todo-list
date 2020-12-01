import project from './project';
import task from './task';

const defaultTask = task({
  title: 'First Task',
  description: 'First Description',
  priority: '0',
  project: 'teste',
  dateString: '2020-12-28',
});

const defaultProject = project('default');
defaultProject.appendTask(defaultTask);
const projects = { defaultProject };

export default projects;
