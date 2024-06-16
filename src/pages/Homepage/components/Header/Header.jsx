import "./Header.style.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <h1 className="headerLogo">
          <Link className="headerLogo__link" to={"/"}>
            <span className="headerLogo__icon">
              <span className="mouth js-mouth"></span>
            </span>
            <span className="headerLogo__text">
              FE
              <br />
              DEVELOPER
            </span>
          </Link>
        </h1>
      </header>
    </>
  );
};

export default Header;
