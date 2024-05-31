import "./Banner.style.scss";
import emojiBg from "../../../../assets/images/mainBanner__bg.png";
import emoji01 from "../../../../assets/images/mainBanner__emoji01.png";
import emoji02 from "../../../../assets/images/mainBanner__emoji02.png";
import emoji03 from "../../../../assets/images/mainBanner__emoji03.png";
import emoji04 from "../../../../assets/images/mainBanner__emoji04.png";

const Banner = ({ bgcolor }) => {
  return (
    <section className="mainBanner" data-bgcolor={bgcolor}>
      <div className="mainBanner__bg">
        <img src={emojiBg} alt="" />
      </div>
      <div className="mainBanner__emoji">
        <span
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        >
          <img src={emoji01} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="vertical"
        >
          <img src={emoji02} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="vertical"
        >
          <img src={emoji03} alt="" />
        </span>
        <span
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="vertical"
        >
          <img src={emoji04} alt="" />
        </span>
      </div>
    </section>
  );
};

export default Banner;
