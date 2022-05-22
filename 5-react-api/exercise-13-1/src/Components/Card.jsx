const Name = (props) => {
  const cardElements = props.objs.map((obj, idx) => {
    return (
      <div className="card" key={obj.name + idx}>
        <div>Name: {obj.name}</div>
        <div>Birthday: {obj.birthday}</div>
        <div>
          Favorite Foods:
          <ul>
            <li>Fish: {obj.favoriteFoods.fish.join(", ")}</li>
            <li>Meat: {obj.favoriteFoods.meats.join(", ")}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div>
      {props.objs.length > 0 && (
        <div>
          <h1>All born before 1990</h1>
          <div>{cardElements}</div>
        </div>
      )}
    </div>
  );
};

export default Name;
