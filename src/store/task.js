const ADD_LINK = "ADD_LINK";
const REMOVE_LINK = "REMOVE_LINK";
const COMPLETED_LINK = "COMPLETED_LINK";

// Actions
export const addTask = (task) => {
  return { type: ADD_LINK, payload: { task: task } };
};

export const removeTask = (id) => {
  return { type: REMOVE_LINK, payload: { id: id } };
};

export const task_completed = (id) => {
  return {
    type: COMPLETED_LINK,
    payload: { id: id },
  };
};

//Reducers

let id = 0;
export default function rootReducers(state = [], action) {
  switch (action.type) {
    case ADD_LINK:
      return [
        ...state,
        { id: ++id, task: action.payload.task, completed: false },
      ];

    case REMOVE_LINK:
      return [state.filter((link) => link.id !== action.payload.id)];

    case COMPLETED_LINK:
      return [
        state.map((link) =>
          link.id === action.payload.id ? { ...link, completed: true } : link
        ),
      ];

    default:
      return state;
  }
}
// export default rootReducers;
