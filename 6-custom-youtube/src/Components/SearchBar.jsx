import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
