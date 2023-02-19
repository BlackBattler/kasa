import "../styles/about.scss";
import aboutData from "../datas/aboutData";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

//About Page
export default function About() {
  return (
    <div className="aboutPage">
      <Header />
      <Banner />
      <div className="about">
        {aboutData.map((data) => (
          <div className="about_collapse" key={data.id}>
            <Collapse title={data.title} content={data.content} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
