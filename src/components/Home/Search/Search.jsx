import "./Search.scss";

const Search = ({ onSearchChange, searchString }) => {
  console.log(searchString);

  return (
    <>
      <form className="search-form">
        <i className="fa fa-magnifying-glass  search-form--icon"></i>
        <input
          onChange={onSearchChange}
          className="search-form--input"
          type="search"
          name="search"
          id="search"
        />
        <label
          className={`search-form--label ${
            searchString.length ? "shrink" : ""
          }`}
          htmlFor="search"
        >
          Search for a country...
        </label>
      </form>
    </>
  );
};

export default Search;
