import "../styles/nav.scss";
import { Link } from "react-router-dom";

//Nav use for header
export default function Nav() {
  //get current location pathname for underline effect
  const currentRoute = window.location.pathname;

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li
          className={
            currentRoute === "/" ? "nav_list_page-active" : "nav_list_page"
          }
        >
          <Link to="/">Accueil</Link>
        </li>
        <li
          className={
            currentRoute === "/about" ? "nav_list_page-active" : "nav_list_page"
          }
        >
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}
