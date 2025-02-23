import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="header__container">
        <nav>
          <Link to="/">
            <h1>Snaps</h1>
          </Link>
        </nav>
      </header>
    );
  };
  export default Header;


  