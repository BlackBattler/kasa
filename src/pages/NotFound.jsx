import "../styles/notFound.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

//Error page
export default function NotFound() {
  return (
    <div className="errorPage">
      <Header />
      <main className="notFound">
        <p className="notFound_error">404</p>
        <p className="notFound_message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="notFound_backToHome" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}
