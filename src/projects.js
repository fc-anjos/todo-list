import project from './project';

const defaultTask = ({
  title: 'Default Task',
  description: 'Default Description',
  priority: '1',
  project: 'Default Project',
  dateString: '2020-12-10',
});

const task2 = ({
  title: 'Default Task 2',
  description: 'Second Task',
  priority: '2',
  project: 'Default Project',
  dateString: '2020-12-12',
});

const defaultProject = project('default');

defaultProject.createTask(defaultTask);
defaultProject.createTask(task2);

const projects = [defaultProject];

export default projects;
