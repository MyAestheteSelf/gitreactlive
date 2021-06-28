import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div className="nav-bar">
      <div className="right-side">
        <h2>{props.title}</h2>
        <a href="#" id="active">
          Home
        </a>
        <a href="#">About</a>
      </div>
      <div className="left-side">
        <input
          type="search"
          name="search-box"
          id="search-box"
          className="search-box"
        />
        <button type="submit" className="Search-btn">
          Search
        </button>
      </div>
    </div>
  );
}
Header.defaultProps={
  title:"Title"
}
Header.propTypes = {
  title: PropTypes.string,
};
