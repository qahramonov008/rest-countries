import { Link } from "react-router-dom";
import "./BackBtn.scss";
const BackBtn = ({isDark}) => {
  return (
    <Link className={isDark !== false ? "back-btn" : 'back-btn back-btn__dark'} to="/">
      <i className="fa-solid fa-arrow-left-long back-btn__icon"></i>
      Back
    </Link>
  );
};

export default BackBtn;
