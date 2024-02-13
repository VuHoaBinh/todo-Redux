import store from "./store/configureStore";
import { add, task_completed } from "./store/task";

const unsubscribe = store.subscribe(() => {
  console.log("update", store.getState());
});

store.dispatch(add("task 1"));
store.dispatch(add("task 2"));

console.log(store.getState());

unsubscribe();
store.dispatch(task_completed(2));
console.log(store.getState());
