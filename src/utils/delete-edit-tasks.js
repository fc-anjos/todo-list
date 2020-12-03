const deleteTask = e => {
  const projectIndex = e.currentTarget.dataset.project_index;
  const taskIndex = e.currentTarget.dataset.task_index;
  projects[projectIndex].tasks.splice(taskIndex, 1);
};

export default deleteTask;
