import "./TitleType4.style.scss";
import titleImg from "../../../assets/images/icon__tit02.png";

const TitleType4 = ({ title, subtitle }) => {
  return (
    <h2 className="titleType4">
      {title}
      <img src={titleImg} alt="" />
      <br />
      {subtitle}
    </h2>
  );
};

export default TitleType4;
