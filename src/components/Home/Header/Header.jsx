import { Outlet } from "react-router-dom";
import "./Header.scss";

const Header = ({ isDark, setIsDark }) => {
  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className={isDark !== false ? 'header' : 'header header__dark'}>
      <h1 className="header__text">Where in the world?</h1>
      <button className="modes" onClick={toggleMode}>
        {isDark !== false ? (
          <i className="fa-regular fa-moon modes__icon" />
        ) : (
          <i className="fa-regular fa-sun modes__icon"></i>
        )}
        <p className="modes__text">{isDark !== false ? 'Dark Mode' : 'Light Mode'}</p>
      </button>
    </header>
  );
};
<Outlet />;

export default Header;
