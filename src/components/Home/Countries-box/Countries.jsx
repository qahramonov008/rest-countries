import Country from "../Country/Country";
import "./Countries.scss";

const Countries = ({ searchedCountry, allRegions, valueRegion }) => {
  return (
    <div className="countries">
      {valueRegion !== "All"
        ? allRegions[valueRegion].map((country) => (
            <Country key={country.name} data={country} />
          ))
        : searchedCountry !== null
        ? searchedCountry.map((country) => (
            <Country data={country} key={country.name} />
          ))
        : null}
    </div>
  );
};

export default Countries;
