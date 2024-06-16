import "./TitleType1.style.scss";

const TitleType1 = ({ title, highlight }) => {
  return (
    <h2 className="TitleType1">
      {title}
      {highlight && <span className="highlight">{highlight}</span>}
    </h2>
  );
};

export default TitleType1;
