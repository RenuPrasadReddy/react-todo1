import React from "react";

class AddTodo extends React.Component {
  state = {
    id: "",
    title: "",
    status: "pending"
  };

  addTask = (e) => {
    console.log(this.state);
    this.props.addTaskCb(this.state);
    this.setState({
      id: "",
      title: ""
    });
  };

  cancel() {
    this.setState({
      id: "",
      title: ""
    });
  }

  render() {
    return (
      <div className="form_container">
        <div className="box">
          <h2>Add Task</h2>
          <label>Id</label>
          <div className="input_text">
            <input
              type="text"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>

          <label>Title</label>
          <div className="input_text">
            <input
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>

          <label>Status:</label>
          <div className="input_dropdown">
            <select
              name="status"
              value=""
              value={this.state.status}
              onChange={(e) => this.setState({ status: e.target.value })}
            >
              <option value="done">Done</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="btn-center">
            <button className="btn btn-cancel" onClick={(e) => this.cancel()}>
              Cancel
            </button>

            <button className="btn btn-submit" onClick={(e) => this.addTask(e)}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
