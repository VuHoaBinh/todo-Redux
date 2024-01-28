// create 1 reducers

const initState = {
  users: [
    { id: "1", name: "binh dep trai" },
    { id: "2", name: "binh dep trai qua nha" },
    { id: "3", name: "binh dep trai that ay" },
  ],
  posts: [],
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "DELETE":
      console.log("delete oke!!", action);
      let userCheck = state.users;
      userCheck = userCheck.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        userCheck,
      };
    case "ADD":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};
export default rootReducers;
