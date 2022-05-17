import React from "react";

class Exercise2_2 extends React.Component {
  render(){
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 =6;
    const string = "I love React!";
    return (
      <div>
        <div>{"1. " + data[0] + " " + data[1]}</div><br />
        <div>{"2. " + (number1 + number2)}</div><br />
        <div>{`3. The string's length is: ${string.length}`}</div>
      </div>
    )
  }
}

export default Exercise2_2;