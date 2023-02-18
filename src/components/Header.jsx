import "../styles/header.scss";
import LogoHeader from "../assets/logo-header.png";
import Nav from "./Nav";

//Simple header function
export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={LogoHeader} alt="Logo Kasa" />
      </h1>
      <Nav />
    </header>
  );
}