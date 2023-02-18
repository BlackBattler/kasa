import "../styles/header.scss";
import LogoHeader from "../assets/logo-header.png";
import Nav from "./Nav";

//Simple header function
export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={LogoHeader} alt="Logo Kasa" />
      </div>
      <Nav />
    </header>
  );
}
