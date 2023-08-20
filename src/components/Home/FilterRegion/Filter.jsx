import "./Filter.scss";

const Filter = ({ valueRegion, setValueRegion }) => {
  return (
    <div className="select-country">
      <select
        className="select-country__dropdown"
        value={valueRegion}
        onChange={(e) => setValueRegion(e.target.value)}
      >
        <option className="select-country__options">All</option>
        <option className="select-country__options" value="Africa">
          Africa
        </option>
        <option className="select-country__options" value="Americas">
          Americas
        </option>
        <option className="select-country__options" value="Asia">
          Asia
        </option>
        <option className="select-country__options" value="Europe">
          Europe
        </option>
        <option className="select-country__options" value="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Filter;
