// import { useState } from "react";
import "./Search.scss";
// import Countries from "../Countries-box/Countries";

const Search = ({ onSearchChange }) => {
  // const [searchString, setSearchString] = useState('')

  // const onSearchChange = (e) => {
  //   setSearchString(e.target.value.toLowerCase())
  // }

  return (
    <form className="search-form">
      <i className="fa fa-magnifying-glass  search-form--icon"></i>
      <input
        onChange={onSearchChange}
        className="search-form--input"
        type="search"
        name="search"
        id="search"
        // onChange={onSearchChange()}
      />
      <label className="search-form--label" htmlFor="search">
        Search for a country...
      </label>

      {/* <Countries searchString={searchString}/> */}
    </form>
  );
};

export default Search;
