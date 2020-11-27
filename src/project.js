const project = name => {
  const tasks = [];
  const appendTask = task => tasks.push(task);
  return { name, tasks, appendTask };
};

export default project;
