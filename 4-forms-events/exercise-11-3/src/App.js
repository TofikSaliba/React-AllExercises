import React from "react";
import InputText from "./Components/InputText";
import Select from "./Components/Select";
import TextArea from "./Components/TextArea";
import Checkbox from "./Components/Checkbox";

class App extends React.Component {
  state = {};

  onChange = (key, newVal) => {
    this.setState({ [key]: newVal });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formValues", JSON.stringify(this.state));
    console.log("done");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <InputText
            id="firstName"
            text="First Name: "
            required={true}
            onChangeCB={this.onChange}
          />
          <InputText
            id="lastName"
            text="Last Name: "
            required={true}
            onChangeCB={this.onChange}
          />
          <Select id="age" text="Age: " onChangeCB={this.onChange} />
          <TextArea
            id="description"
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
      </div>
    );
  }
}

export default App;
