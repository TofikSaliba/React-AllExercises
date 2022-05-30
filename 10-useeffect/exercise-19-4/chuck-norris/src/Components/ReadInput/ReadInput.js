import "./ReadInput.css";

function ReadInput(props) {
  const onSubmit = (event) => {
    event.preventDefault();
    let inputEl = event.target.firstChild;
    props.getSearchQuery(inputEl.value);
    inputEl.value = "";
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" className="inputText" />
        <button type="submit">Search</button>
      </form>
      <div className="errorMsg">{props.errorMsg}</div>
    </>
  );
}

export default ReadInput;
