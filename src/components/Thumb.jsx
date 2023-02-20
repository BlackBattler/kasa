import "../styles/thumb.scss";
import { Link } from "react-router-dom";

// Function to display differents appartments and links to their pages
export default function Thumb({ id, title, cover }) {
  return (
    <Link to={`/accommodation/${id}`} className="thumb">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
}
