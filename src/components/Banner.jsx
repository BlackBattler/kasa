import "../styles/banner.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Banner change depend if user on 'HOME' page or 'ABOUT' page
export default function Banner() {
  const [homePage, setHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHomePage(true);
    }
  }, [location.pathname]);

  return (
    <section className={homePage ? "banner" : "banner_about"}>
      {homePage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
}
