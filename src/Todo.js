import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "./AddTodo";
class Todo extends React.Component {
  state = {
    todos: [
      { id: 0, title: "1st task", status: "pending" },
      { id: 1, title: "2nd task", status: "pending" },
      { id: 2, title: "3rd task", status: "done" },
      { id: 3, title: "4th task", status: "pending" }
    ]
  };

  onDelete = (todoDel) => {
    console.log(todoDel);

    const filteredItems = this.state.todos.filter(
      (todo) => todo.id !== todoDel.id
    );
    console.log({ filteredItems });

    this.setState({
      todos: filteredItems
    });
  };

  onEdit(todoEdit) {
    let newTodos = this.state.todos.map((todo) => {
      if (todo.status === "pending" && todoEdit.id === todo.id) {
        return {
          ...todo,
          status: "done"
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos
    });
  }

  addTaskCb = (newTodo) => {
    console.log("new=", newTodo);
    // newTodo["id"] = this.state.todos.length;
    const newTodoList = [...this.state.todos, newTodo];
    this.setState({ todos: newTodoList });
  };

  renderList() {
    return this.state.todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td style={{ color: todo.status === "done" ? "green" : "red" }}>
            {todo.status}
          </td>
          <td>
            <button
              className="btn btn-delete"
              onClick={() => this.onDelete(todo)}
            >
              <span>
                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
              </span>
            </button>

            <button className="btn btn-edit" onClick={() => this.onEdit(todo)}>
              <span>
                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
              </span>
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Todo App</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* {console.log(this.renderList())} */}
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
        <AddTodo
          todoListLength={this.state.todos.length}
          addTaskCb={this.addTaskCb}
        />
      </div>
    );
  }
}

export default Todo;
