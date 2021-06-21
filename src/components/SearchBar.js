import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm("");
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div style={{ display: "flex" }} className="ui field">
          <label>Search Videos</label>
          <input type="text" value={term} onChange={onInputChange} />
          <button
            style={{ marginLeft: "0.2rem" }}
            className="ui secondary button"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
