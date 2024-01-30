const initState = {
  Links: [
    { id: "1", link: "https://www.youtube.com/watch?v=dKU6Z5e3j1w&t=680s" },
  ],
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_LINK":
      return {
        ...state,
        Links: [...state.Links, action.payload],
      };
    // console.log(this.state.Links);
    case "UPDATE_LINK":
      return {
        ...state,
        Links: state.Links.map((link) =>
          link.id === action.payload.id
            ? { ...link, text: action.payload.text }
            : link
        ),
      };
    case "DELETE_LINK":
      return {
        ...state,
        Links: state.Links.filter((link) => link.id !== action.payload),
      };
    default:
      return state;
  }
};
export default rootReducers;
