import { Outlet } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__text">Where in the world?</h1>
      <button className="modes">
        <i className="fa-regular fa-moon modes__icon" />
        <p className="modes__text">Dark Mode</p>
      </button>
    </header>
  );
};
<Outlet />

export default Header;
