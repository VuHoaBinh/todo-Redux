import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/task";
import { addEmployees } from "./store/employee";
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated", store.getState());
// });
store.dispatch({ type: "SHOW_ERROR", payload: { error: "loi ne" } });

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
console.log(store.getState());

// unsubscribe();
store.dispatch(completedTask(2));

store.dispatch(removeTask(1));
console.log(store.getState());

store.dispatch(addEmployees("Haaha"));
