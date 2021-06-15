import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={{ display: "flex" }} className="ui field">
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button
              style={{ marginLeft: "0.2rem" }}
              className="ui secondary button"
              onClick={this.onFormSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
