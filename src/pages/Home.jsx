import "../styles/home.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

//Home page
export default function Home() {
  return (
    <div className="homePage">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}
