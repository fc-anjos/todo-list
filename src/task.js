const task = object => {
  const {
    title,
    description,
    priority,
    project,
    dateString,
  } = object;

  const dueDate = new Date(dateString);
  return {
    title, description, priority, project, dueDate,
  };
};

export default task;
