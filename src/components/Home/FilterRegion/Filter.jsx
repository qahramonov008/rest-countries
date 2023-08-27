import "./Filter.scss";

const Filter = ({ valueRegion, setValueRegion, isDark }) => {
  return (
    <div className="select-country">
      <select
        className={isDark !== false ? "select-country__dropdown" : "select-country__dropdown select-country__dropdown__dark"}
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
