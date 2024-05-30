import "./SiteCss.style.scss";
import titleImg from "../../../../assets/images/icon__tit02.png";
import thumb01 from "../../../../assets/images/mainCss__marquee.gif";
import thumb02 from "../../../../assets/images/mainCss__wave.gif";
import thumb03 from "../../../../assets/images/mainCss__sticky.gif";
import thumb04 from "../../../../assets/images/mainCss__todo.gif";
import thumb05 from "../../../../assets/images/mainCss__card.gif";
import thumb06 from "../../../../assets/images/mainCss__snowball.gif";

import SiteCssItem from "./SiteCssItem";

const items = [
  {
    id: 1,
    site: "https://hellojoyworldz.github.io/myCSS/animation/marquee",
    thumb: thumb01,
    title: "title",
    desc: "desc",
  },
];

const SiteCss = () => {
  return (
    <section className="mainCss" data-bgcolor="#f5f5f5">
      <h2 className="mainCss__tit">
        Hello,
        <img src={titleImg} alt="" />
        <br />
        My
        <span className="highlight">CSS Animation</span>
      </h2>

      <ul className="list">
        {items.map((item) => (
          <SiteCssItem
            key={item.id}
            site={item.site}
            thumb={item.thumb}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default SiteCss;
