import task from './task';

const project = name => {
  const tasks = [];

  const createTask = object => tasks.push(task({ ...object, project: name }));

  const replaceTask = object => {
    const { taskIndex } = object;
    tasks[taskIndex] = task({ ...object, project: name });
    return {
      name,
      tasks,
      createTask,
      replaceTask,
    };
  };

  return {
    name,
    tasks,
    createTask,
    replaceTask,

  };
};

export default project;
