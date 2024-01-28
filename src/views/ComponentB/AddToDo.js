import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnClick = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      toast.error("Please fill in the title!");
      return;
    }
    this.props.addNewToDo({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    });

    this.setState({
      title: "",
    });
    toast.success("Wow so easy!");
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            className="add"
            onClick={(event) => this.handleOnClick(event)}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
