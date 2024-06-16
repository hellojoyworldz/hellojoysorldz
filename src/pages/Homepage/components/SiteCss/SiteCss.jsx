import "./SiteCss.style.scss";
import titleImg from "../../../../assets/images/icon__tit02.png";
import thumb01 from "../../../../assets/images/mainCss__marquee.gif";
import thumb02 from "../../../../assets/images/mainCss__wave.gif";
import thumb03 from "../../../../assets/images/mainCss__sticky.gif";
import thumb04 from "../../../../assets/images/mainCss__todo.gif";
import thumb05 from "../../../../assets/images/mainCss__card.gif";
import thumb06 from "../../../../assets/images/mainCss__snowball.gif";

import TitleType4 from "../../../../components/Title/TitleType4/TitleType4";
import ListType4 from "../../../../components/List/ListType4/ListType4";

const items = [
  {
    id: "01",
    site: "https://hellojoyworldz.github.io/myCSS/animation/marquee",
    thumb: thumb01,
    title: "title",
    desc: "desc",
  },
];

const SiteCss = ({ bgcolor }) => {
  return (
    <section className="mainCss" data-bgcolor={bgcolor}>
      <TitleType4 title={"Hello,"} subtitle={"MyCSS Animation"} />
      <ListType4 items={items} />
    </section>
  );
};

export default SiteCss;
