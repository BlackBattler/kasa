import "../styles/gallery.scss";
import dataList from "../datas/appartmentsList";
import Thumb from "./Thumb";

// Display appartments
export default function Gallery() {
  return (
    <main className="gallery">
      {dataList.map((data) => (
        <Thumb
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
    </main>
  );
}
