const task = object => {
  const {
    title,
    description,
    priority,
    project,
    dateString,
  } = object;

  const dueDate = new Date(dateString);

  const formattedDate = () => dueDate.toISOString().substring(0, 10);
  return {
    title,
    description,
    priority,
    project,
    dueDate,
    formattedDate,
  };
};

export default task;
