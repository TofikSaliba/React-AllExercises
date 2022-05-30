import { useState } from "react";

const Select = (props) => {
  const [selected, setSelected] = useState("all");
  const categories = props.categories.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  const handleSelect = (value) => {
    setSelected(value);
    props.getSelectedCategory(value);
  };

  return (
    <>
      <select
        onChange={(e) => handleSelect(e.target.value)}
        value={selected}
        name="categories"
        id="categories"
      >
        <option value="all">All</option>
        {categories}
      </select>
    </>
  );
};

export default Select;
