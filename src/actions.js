export const add = (task) => {
  return { type: "ADD_LINK", payload: { task: task } };
};

export const task_completed = (task) => {
  return {
    type: "COMPLETED_LINK",
    payload: { id: task },
  };
};
