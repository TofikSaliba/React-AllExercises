import React from "react";
import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q1Input from "./Q1Input";
import Q2 from "./Q2";
import Q2Input from "./Q2Input";

class Quiz extends React.Component {
  render(){
    return (
      <div style = {{padding: "1rem", border: "1px solid black", width: "500px"}}>
        <QuizTitle />
        <Q1 />
        <Q1Input />
        <Q2 />
        <Q2Input />
      </div>
    )
  }
}

export default Quiz;