import React from "react";
import "./styles.scss";
import AddTodo from "./AddToDo";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "week1" },
      { id: "todo2", title: "week2" },
      { id: "todo3", title: "week3" },
    ],
    updateTodo: {},
  };

  addNewToDo = (element) => {
    let addtodo = this.state.listTodos;
    addtodo.push(element);
    this.setState({
      listTodos: addtodo,
    });
  };

  deleteTodo = (element) => {
    console.log("deleteTodo: ", element);
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== element.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Wow so easy!");
  };

  UpdateTodo = (element) => {
    let { updateTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(updateTodo).length === 0;

    if (isEmptyObj === false && updateTodo.id === element.id) {
      let listTodosCopy = [...listTodos];
      let get_id = listTodosCopy.findIndex((item) => item.id === element.id); // get id

      listTodosCopy[get_id].title = updateTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        updateTodo: {},
      });
      toast.success("Update successfully!");
    } else {
      this.setState({
        updateTodo: element,
      });
    }
  };

  handleOnchangeUpdateTodo = (element) => {
    let updateTodo = { ...this.state.updateTodo };
    updateTodo.title = element.target.value;
    this.setState({
      updateTodo: updateTodo,
    });
  };

  render() {
    let { listTodos, updateTodo } = this.state;

    let isEmptyObj = Object.keys(updateTodo).length === 0;
    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewToDo={this.addNewToDo} />

          <div className="content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <>
                    <div className="todo-child" key={item.id}>
                      {isEmptyObj === true ? (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : (
                        <>
                          {updateTodo.id === item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                value={updateTodo.title}
                                onChange={(event) =>
                                  this.handleOnchangeUpdateTodo(event)
                                }
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title}
                            </span>
                          )}
                        </>
                      )}
                      <></>
                      <button
                        type="button"
                        className="update"
                        onClick={() => this.UpdateTodo(item)}
                      >
                        {isEmptyObj === false && updateTodo.id === item.id
                          ? "Save"
                          : "Update"}
                      </button>
                      <button
                        type="button"
                        className="delete"
                        onClick={() => this.deleteTodo(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
