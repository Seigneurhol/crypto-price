import React from "react";

/**
 * Render the SearchBar component
 * @param {*} props 
 */
function SearchBar(props) {
  return (
    <div className="search-bar light-shadow">
      <i className="fas fa-search fa-lg" />
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Search a cryptocurrency"
        value={props.value.input}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBar;
