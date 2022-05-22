const Select = (props) => {
  const categories = props.categories.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  return (
    <>
      <select
        onChange={(e) => props.getSelectedCategory(e.target.value)}
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
