import React from "react";

class TodoTask extends React.Component {
  render() {
    return (
      <>
        <div className="taskId">{this.props.id}</div>
        <div className="task">{this.props.task}</div>
        <div className="priority">{this.props.priority}</div>
        <div className="date">{this.props.date}</div>
        <div className="Btns">
          <button onClick={() => this.props.handleEdit(this.props.id)}>
            Edit
          </button>
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default TodoTask;
