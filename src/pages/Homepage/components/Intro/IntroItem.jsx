import "./IntroItem.style.scss";
import itemIcon01 from "../../../../assets/images/mainCate__itemIcon01.png";
import itemBg01 from "../../../../assets/images/mainCate__itemBg01.jpg";

const IntroItem = ({ title, icon, thumb }) => {
  return (
    <div className="list__item">
      <strong className="list__tit">{title}</strong>
      <span className="list__icon">
        <img src={icon} alt="" />
      </span>
      <span className="list__thumb">
        <img src={thumb} alt="" />
      </span>
    </div>
  );
};

export default IntroItem;
