// const initState = {
//   Links: [{ id: "1", link: "https://www.youtube.com/embed/QyKjBaHdQdw" }],
// };

let id = 0;
export default function rootReducers(state = [], action) {
  switch (action.type) {
    case "ADD_LINK":
      return [
        ...state,
        { id: ++id, task: action.payload.task, completed: false },
      ];
    // console.log(this.state.Links);
    // case "UPDATE_LINK":
    //   return [
    //     ...state,
    //     state.map((link) =>
    //       link.id === action.payload.id
    //         ? { ...link, text: action.payload.text }
    //         : link
    //     ),
    //   ];
    case "DELETE_LINK":
      return [state.filter((link) => link.id !== action.payload.id)];
    case "COMPLETED_LINK":
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
