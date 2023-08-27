import Filter from "../FilterRegion/Filter";
import Search from "../Search/Search";
import "./Form.scss";

const Form = ({ isDark, onSearchChange, searchString, valueRegion, setValueRegion }) => {
  return (
    <div className=" main-form-box">
      {<Search isDark={isDark} onSearchChange={onSearchChange} searchString={searchString}/>}
      {<Filter isDark={isDark} valueRegion={valueRegion} setValueRegion={setValueRegion}/>}
    </div>
  );
};

export default Form;
