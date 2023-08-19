import Country from "../Country/Country";
import "./Countries.scss";

const Countries = ({ searchedCountry }) => {
  return (
    <div className="countries">
      {searchedCountry !== null
        ? searchedCountry.map((country) => (
            <Country data={country} key={country.name.common} />
          ))
        : null}
    </div>
  );
};

export default Countries;
