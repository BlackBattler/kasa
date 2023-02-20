import "../styles/notFound.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";

//Error page
export default function NotFound() {
  return (
    <div>
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
    </div>
  );
}
