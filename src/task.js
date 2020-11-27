const task = object => {
  const {
    title,
    description,
    priority,
    project,
  } = object;

  return {
    title, description, priority, project,
  };
};

export default task;
