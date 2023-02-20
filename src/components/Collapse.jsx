import "../styles/collapse.scss";
import arrow from "../assets/collapse-arrow.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="collapse">
      <h2 className="collapse_title" onClick={() => setToggle(!toggle)}>
        {title}
        <img
          className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
          src={arrow}
          alt="Show content"
        />
      </h2>
      <div className={toggle ? "collapse_content" : "collapse_content-hidden"}>
        {Array.isArray(content) ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p className="collapse_text">{content}</p>
        )}
      </div>
    </div>
  );
}
