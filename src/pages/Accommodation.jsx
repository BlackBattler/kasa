import "../styles/accommodation.scss";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataList from "../datas/appartmentsList";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import starRed from "../assets/star-red.png";
import starGrey from "../assets/star-grey.png";
import Footer from "../components/Footer";

// Accommodation page
export default function Accommodation() {
  const navigate = useNavigate();

  const accommodationID = useParams("id").id;

  const getAppartmentID = dataList.filter(
    (data) => data.id === accommodationID
  );

  // Redirige vers la page erreur si on ne trouve pas l'ID
  useEffect(() => {
    if (getAppartmentID.length === 0) {
      navigate("/error");
    }
  }, [navigate, getAppartmentID.length]);

  if (getAppartmentID.length > 0) {
    const accommodationTitle = getAppartmentID[0].title;
    const accommodationLocation = getAppartmentID[0].location;
    const accommodationTag = getAppartmentID[0].tags;

    const hostName = getAppartmentID[0].host.name.split(" ");
    const hostImage = getAppartmentID[0].host.picture;
    const rating = getAppartmentID[0].rating;

    const description = getAppartmentID[0].description;
    const equipments = getAppartmentID[0].equipments;

    return (
      <div className="accommodationPage">
        <Header />
        <Carrousel imageSlider={getAppartmentID[0].pictures} />
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
                <img
                  className="accommodation_host_picture"
                  src={hostImage}
                  alt="host"
                />
              </div>

              {/* Star ratings */}
              <div className="accommodation_rating">
                {[...Array(5)].map((_star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <img
                      className="accommodation_rating_star"
                      key={index}
                      src={ratingValue <= rating ? starRed : starGrey}
                      alt="accommodation rating"
                    />
                  );
                })}
              </div>
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
}
