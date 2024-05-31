import "./TitleType3.style.scss";
import titleImg from "../../../assets/images/mainSite__tit.png";
import React from "react";

const TitleType3 = ({ title }) => {
  return (
    <h2 className="titleType3">
      {title}
      <span className="titleType3__img">
        <img src={titleImg} alt="" />
      </span>
    </h2>
  );
};

export default TitleType3;
