import { useState } from "react";

const AvatarCards = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
    props.getValue(value);
  };
  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        type="text"
      />
    </div>
  );
};

export default AvatarCards;
