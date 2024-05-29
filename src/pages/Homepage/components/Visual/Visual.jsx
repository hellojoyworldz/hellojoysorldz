import "./Visual.style.scss";
import emojiImg01 from "../../../../assets/images/visual__emojiImg01.png";
import emojiImg02 from "../../../../assets/images/visual__emojiImg02.png";
import emojiImg03 from "../../../../assets/images/visual__emojiImg03.png";
import emojiBg from "../../../../assets/images/visual__emojiBg.png";

const Visual = () => {
  return (
    <section className="visual" data-bgcolor="#fff">
      <div className="visual__tit">
        <h2>
          G.SUNAH
          <br />
          PORTFOLIO
        </h2>
        <span className="visual__tit--move">HELLO, WORLD!</span>
      </div>

      <div className="visual__sbj">
        <div
          className="visual__sbj--move"
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          <span>I'M FRONTEND DEVELOPER</span>
          <span>I'M FRONTEND DEVELOPER</span>
          <span>I'M FRONTEND DEVELOPER</span>
          <span>I'M FRONTEND DEVELOPER</span>
        </div>
      </div>

      <div className="visual__emoji">
        <div className="visual__emojiItem">
          <span
            className="item01"
            data-scroll
            data-scroll-speed="3"
            data-scroll-direction="vertical"
          >
            <img src={emojiImg01} alt="" />
          </span>
          <span
            className="item02"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="vertical"
          >
            <img src={emojiImg02} alt="" />
          </span>
          <span
            className="item03"
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="vertical"
          >
            <img src={emojiImg03} alt="" />
          </span>
        </div>
        <div className="visual__emojiBg">
          <span>
            <img src={emojiBg} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Visual;
