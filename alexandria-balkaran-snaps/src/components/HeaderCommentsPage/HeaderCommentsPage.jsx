import "./HeaderCommentsPage.scss";
import { Link } from "react-router-dom";

const HeaderCommentsPage = () => {
    return (
      <header className="header-comments__container">
        <nav>
          <h1>Snaps</h1>
          <div className="home__button">
            <Link className="home__button-text" to="/">
                <img className="home__button-img" src="../src/assets/images/Arrow.svg"/>
                Home
            </Link>
          </div>
        </nav>
      </header>
    );
  };
  export default HeaderCommentsPage;