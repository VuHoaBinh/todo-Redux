const initState = {
  users: [
    { id: "1", link: "binh dep trai" },
    { id: "2", link: "binh dep trai qua nha" },
    { id: "3", link: "binh dep trai that ay" },
  ],
  posts: [],
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    // case "DELETE":

    // case "ADD":

    // case "UPDATE":

    // case "FIND":

    default:
      return state;
  }
};
export default rootReducers;
