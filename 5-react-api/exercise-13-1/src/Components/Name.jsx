const Name = (props) => {
  const namesElements = props.names.map((name, idx) => {
    return <li key={name + idx}>{name}</li>;
  });

  return (
    <div>
      {props.names.length > 0 && (
        <div>
          <h1>All names</h1>
          <ul>{namesElements}</ul>
        </div>
      )}
    </div>
  );
};

export default Name;
