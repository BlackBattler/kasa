import "../styles/footer.scss";
import LogoFooter from "../assets/logo-footer.png";

//Simple footer function
export default function Footer() {
  return (
    <footer className="footer">
      <img src={LogoFooter} alt="logo kasa" />
      <p className="footer_rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
