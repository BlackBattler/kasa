import "../styles/accommodation.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataList from "../datas/appartmentsList";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

// Accommodation page
export default function Accommodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const accommodationID = useParams("id").id;
  const getAppartmentID = dataList.filter(
    (data) => data.id === accommodationID
  );

  const accommodationTitle = getAppartmentID[0].title;
  const accommodationLocation = getAppartmentID[0].location;
  const accommodationTag = getAppartmentID[0].tags;

  const hostName = getAppartmentID[0].host.name.split(" ");
  const hostImage = getAppartmentID[0].host.picture;
  const rating = getAppartmentID[0].rating;

  const description = getAppartmentID[0].description;
  const equipments = getAppartmentID[0].equipments;

  //
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
        <div className="accommodation_content">
          {/* Title, location, tags */}
          <div className="accommodation_content_information">
            {/* Title */}
            <h1 className="accommodation_title">{accommodationTitle}</h1>
            {/* Location */}
            <p className="accommodation_location">{accommodationLocation}</p>
            {/* Tags */}
            <div className="accommodation_tag">
              {accommodationTag.map((tag, index) => (
                <p className="accommodation_tag_content" key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>

          {/* Host, ratings */}
          <div className="accommodation_host">
            <div>
              {/* Host name */}
              <div className="accommodation_host_name">
                <p>{hostName[0]}</p>
                <p>{hostName[1]}</p>
              </div>

              {/* Host picture */}
              <img src={hostImage} alt="host" />
            </div>

            {/* Star ratings */}
            <div className="accommodation_rating"></div>
          </div>
        </div>

        {/* Collapse components */}
        <div className="accommodation_collapse">
          {/* Description */}
          <div className="accommodation_collapse_item">
            <Collapse title="Description" content={description} />
          </div>
          {/* Equipment */}
          <div className="accommodation_collapse_item">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
