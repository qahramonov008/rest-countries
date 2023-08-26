import { Link } from "react-router-dom";
import "./BackBtn.scss";
const BackBtn = () => {
  return (
    <Link className="back-btn" to="/">
      <i className="fa-solid fa-arrow-left-long back-btn__icon"></i>
      Back
    </Link>
  );
};

export default BackBtn;
