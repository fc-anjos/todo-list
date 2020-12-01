import task from './task';

const project = name => {
  const tasks = [];
  const createTask = object => tasks.push(task({ ...object, project: name }));
  return { name, tasks, createTask };
};

export default project;
