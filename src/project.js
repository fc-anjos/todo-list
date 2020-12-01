import task from './task';

const project = name => {
  const tasks = [];
  const createTask = object => tasks.push(task(object));
  return { name, tasks, createTask };
};

export default project;
