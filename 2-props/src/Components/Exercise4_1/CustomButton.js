import React from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

const Exercise4_1 = () => {
  return (
    <div>
      <CustomButton className="bold" text="Important" />
      <CustomButton text="Not important" />
    </div>
  );
};

export default Exercise4_1;
