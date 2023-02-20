import "../styles/header.scss";
import LogoHeader from "../assets/logo-header.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

// Simple header function
export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">
          <img src={LogoHeader} alt="Logo Kasa" />
        </Link>
      </h1>
      <Nav />
    </header>
  );
}
