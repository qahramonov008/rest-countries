import Filter from "../FilterRegion/Filter";
import Search from "../Search/Search";
import "./Form.scss";

const Form = ({ onSearchChange }) => {
  return (
    <form className=" main-form-box">
      {<Search onSearchChange={onSearchChange}/>}
      {<Filter />}
    </form>
  );
};

export default Form;
