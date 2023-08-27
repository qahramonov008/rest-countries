import "./Search.scss";

const Search = ({ onSearchChange, searchString, isDark }) => {
  console.log(searchString);

  return (
    <>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <i
          className={
            isDark !== false
              ? "fa fa-magnifying-glass search-form--icon"
              : "fa fa-magnifying-glass search-form--icon search-form--icon__dark"
          }
        ></i>
        <input
          onChange={onSearchChange}
          className={
            isDark !== false
              ? "search-form--input"
              : "search-form--input search-form--input__dark"
          }
          type="search"
          name="search"
          id="search"
        />
        <label
          className={`${
            isDark !== false
              ? "search-form--label"
              : "search-form--label search-form--label__dark"
          } ${
            searchString.length
              ? `${isDark !== false ? "shrink" : "shrink shrink__dark"}`
              : ""
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
