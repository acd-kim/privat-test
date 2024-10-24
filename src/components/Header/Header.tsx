import { Link } from "react-router-dom";

import { useUserContext } from "../../services/auth/context/useUserContext";
import "./Header.scss";

export function Header() {
  const { contextUserData } = useUserContext();

  return (
    <header className="main-header">
      <div className="main-header__inner">
        <Link className="a_default" to="/">
          <h1 className="main-header__logo">My Store App</h1>
        </Link>

        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className="main-nav__link" to="/">
                Home
              </Link>
            </li>
            {!contextUserData && (
              <li>
                <Link className="main-nav__link" to="/login">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
