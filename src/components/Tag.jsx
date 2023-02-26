import "../styles/tag.scss";

export default function Tag({ index, tag }) {
  return (
    <div className="tag">
      <p className="tag_content" key={index}>
        {tag}
      </p>
    </div>
  );
}
