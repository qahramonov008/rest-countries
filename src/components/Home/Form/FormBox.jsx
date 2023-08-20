import Filter from "../FilterRegion/Filter";
import Search from "../Search/Search";
import "./Form.scss";

const Form = ({ onSearchChange, searchString, valueRegion, setValueRegion }) => {
  return (
    <form className=" main-form-box">
      {<Search onSearchChange={onSearchChange} searchString={searchString}/>}
      {<Filter valueRegion={valueRegion} setValueRegion={setValueRegion}/>}
    </form>
  );
};

export default Form;
