import task from './task';

const project = name => {
  const tasks = [];

  const createTask = object => tasks.push(task({ ...object, project: name }));

  const replaceTask = object => {
    const { taskIndex } = object;
    const replacedTask = task({ ...object, project: name });
    tasks.splice(taskIndex, 1, replacedTask);
    tasks[taskIndex] = replacedTask;
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
