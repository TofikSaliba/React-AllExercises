import React from "react";
import TodoData from "./TodoData";
import TodoTask from "./Components/TodoTask";

import "./style.css";

class App extends React.Component {
  state = {
    tasks: [],
    id: "",
    task: "",
    priority: "",
    editing: false,
    editedID: "",
  };

  componentDidMount = () => {
    const local = localStorage.getItem("todoData");
    if (local) {
      this.setState({
        tasks: JSON.parse(local).sort((a, b) => b.priority - a.priority),
      });
    } else {
      this.setState({
        tasks: TodoData.sort((a, b) => b.priority - a.priority),
      });
    }
  };

  //* ----- Create -----
  createTask = (event) => {
    event.preventDefault();
    if (this.state.editing) {
      this.deleteTask(this.state.editedID);
    }
    setTimeout(() => {
      const newTasks = [...this.state.tasks];
      const dateC = new Date().toLocaleString();

      newTasks.push({
        id: this.state.id,
        task: this.state.task,
        priority: this.state.priority,
        date: dateC,
      });
      this.setState({
        tasks: newTasks.sort((a, b) => b.priority - a.priority),
        id: "",
        task: "",
        priority: "",
        editing: false,
        editedID: "",
      });
      localStorage.setItem("todoData", JSON.stringify(newTasks));
    }, 10);
  };

  updateStateInput = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  //* ----- Read -----
  displayTasks = () => {
    return this.state.tasks.map((task) => {
      return (
        <div key={task.id} className="taskCard">
          <TodoTask
            handleDelete={this.deleteTask}
            handleEdit={this.editTask}
            task={task.task}
            date={task.date}
            priority={task.priority}
            id={task.id}
          />
        </div>
      );
    });
  };

  //* ----- Update -----
  editTask = (id) => {
    const editTask = this.state.tasks.find((task) => {
      return task.id === id;
    });
    this.setState({
      id: editTask.id,
      task: editTask.task,
      priority: editTask.priority,
      editing: true,
      editedID: editTask.id,
    });
  };

  //* ----- Delete -----
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: newTasks });
    localStorage.setItem("todoData", JSON.stringify(newTasks));
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="inputHeader">
          <form onSubmit={this.createTask}>
            <input
              id="id"
              onChange={this.updateStateInput}
              type="text"
              placeholder="ID"
              value={this.state.id}
              required
            />
            <input
              id="task"
              onChange={this.updateStateInput}
              type="text"
              placeholder="Task"
              value={this.state.task}
              required
            />
            <input
              id="priority"
              onChange={this.updateStateInput}
              type="number"
              placeholder="Priority (1-10)"
              value={this.state.priority}
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="tasksContainer">
          <div className="taskCardHeader">
            <div>ID</div>
            <div>Task</div>
            <div>Priority</div>
            <div>Date Created/Edited</div>
            <div>Edit/Delete</div>
          </div>
          {this.displayTasks()}
        </div>
      </div>
    );
  }
}

export default App;
