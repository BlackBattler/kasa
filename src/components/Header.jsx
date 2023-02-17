import { Link } from "react-router-dom";
import "../styles/Header.css";
import LogoHeader from "../assets/logo-header.png";

export default function Header() {
      return (
            <header className="header">
                  <div className="header_logo">
                        <img src={LogoHeader} alt="Logo Kasa" />
                  </div>
                  <nav className="header_nav">
                        <Link to="/">Accueil</Link>
                        <Link to="/about">A Propos</Link>
                  </nav>
            </header>
      );
}
