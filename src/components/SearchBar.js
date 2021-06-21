import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    this.setState({ term: "" });
  };
};

class SearchBar extends React.Component {
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
