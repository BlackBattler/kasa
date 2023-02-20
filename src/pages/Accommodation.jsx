import "../styles/accommodation.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataList from "../datas/appartmentsList";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

export default function Accommodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const accommodationID = useParams("id").id;
  const getAppartmentID = dataList.filter(
    (data) => data.id === accommodationID
  );

  const description = getAppartmentID[0].description;
  const equipments = getAppartmentID[0].equipments;

  useEffect(() => {
    const getAppartmentID = dataList.filter(
      (data) => data.id === accommodationID
    );
    setImageSlider(getAppartmentID[0].pictures);
  }, [accommodationID]);

  return (
    <div className="accommodationPage">
      <Header />
      <Carrousel imageSlider={imageSlider} />
      <main className="accommodation">
        <div className="accommodation_collapse">
          <div className="accommodation_collapse_item">
            <Collapse title="Description" content={description} />
          </div>
          <div className="accommodation_collapse_item">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
