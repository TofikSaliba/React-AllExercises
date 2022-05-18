import React from "react";
import "./form.css";

class Confirm extends React.Component {
  state = { confirmed: false };
  getValues = () => {
    return (
      <div>
        <div>
          <span>First Name: </span>
          {this.props.stateVals.firstName}
        </div>
        <div>
          <span>Last Name: </span>
          {this.props.stateVals.lastName}
        </div>
        {this.props.stateVals.age !== "select age" && (
          <div>
            <span>Age: </span>
            {this.props.stateVals.age}
          </div>
        )}
        {this.props.stateVals.description && (
          <div>
            <span>Description: </span>
            {this.props.stateVals.description}
          </div>
        )}
      </div>
    );
  };

  onConfirmClick = () => {
    this.setState({ confirmed: true });
    localStorage.removeItem("formValues");
  };

  render() {
    return (
      <div className="confirmContainerFather">
        {!this.state.confirmed && (
          <div className="confirmContainer">
            <h2>Your Info</h2>
            {this.getValues()}
            <button
              id="cancel"
              onClick={() => this.props.confirmRespone("confirmScreen", false)}
            >
              Back
            </button>
            <button id="confirm" onClick={this.onConfirmClick}>
              Send Survey
            </button>
          </div>
        )}
        {this.state.confirmed && (
          <div className="finallyConfirmed">
            <h1>
              Your form has been submitted! We will get back to you within 2
              working days.
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default Confirm;
