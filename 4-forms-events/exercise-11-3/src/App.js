import React from "react";
import InputText from "./Components/InputText";
import Select from "./Components/Select";
import TextArea from "./Components/TextArea";
import Checkbox from "./Components/Checkbox";
import Confirm from "./Components/Confirm";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "select age",
    description: "",
    confirmScreen: false,
  };

  componentDidMount = () => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("formValues");
    });
  };

  onChange = (key, newVal) => {
    this.setState({ [key]: newVal });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(this.state));
    this.setState((prev) => {
      return { confirmScreen: !prev.confirmScreen };
    });
  };

  getValue = (key) => {
    const local = JSON.parse(localStorage.getItem("formValues"));
    if (local && local[key]) {
      return local[key];
    } else {
      return this.state[key];
    }
  };

  formOrConfirmScreen = () => {
    if (!this.state.confirmScreen) {
      return (
        <form id="myForm" onSubmit={(e) => this.onFormSubmit(e)}>
          <h1>Please Complete The Survey</h1>
          <InputText
            id="firstName"
            value={this.getValue("firstName")}
            text="First Name: "
            required={true}
            onChangeCB={this.onChange}
          />
          <InputText
            id="lastName"
            value={this.getValue("lastName")}
            text="Last Name: "
            required={true}
            onChangeCB={this.onChange}
          />
          <Select
            id="age"
            value={this.getValue("age")}
            text="Age: "
            onChangeCB={this.onChange}
          />
          <TextArea
            id="description"
            value={this.getValue("description")}
            text="Description: "
            onChangeCB={this.onChange}
          />
          <Checkbox
            id="terms"
            text="I have read and agree to the terms."
            checked={false}
            required={true}
            onChangeCB={this.onChange}
          />
          <button type="submit">Submit!</button>
        </form>
      );
    } else {
      return <Confirm confirmRespone={this.onChange} stateVals={this.state} />;
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("beforeunload", () => {
      localStorage.removeItem("formValues");
    });
  };

  render() {
    return <div className="formContainer">{this.formOrConfirmScreen()}</div>;
  }
}

export default App;
