import "./TitleType5.style.scss";
import titleImg from "../../../assets/images/icon__tit03.png";

const TitleType5 = ({ title, subtitle, hightlight }) => {
  return (
    <h2 className="titleType5">
      {title}
      <br />
      {subtitle}
      <span className="highlight">
        {hightlight}
        <img src={titleImg} alt="" />
      </span>
    </h2>
  );
};

export default TitleType5;
