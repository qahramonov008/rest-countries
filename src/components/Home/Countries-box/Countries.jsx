import Country from "../Country/Country";
import "./Countries.scss";

const Countries = ({ searchedCountry, allRegions, valueRegion, isDark }) => {
  return (
    <div className="countries">
      {valueRegion !== "All"
        ? allRegions[valueRegion].map((country) => (
            <Country isDark={isDark} key={country.name} data={country} />
          ))
        : searchedCountry !== null && searchedCountry.length
        ? searchedCountry.map((country) => (
            
            <Country isDark={isDark} data={country} key={country.name} />
          ))
        : <h1 className="error">No search results</h1>}
    </div>
  );
};

export default Countries;
