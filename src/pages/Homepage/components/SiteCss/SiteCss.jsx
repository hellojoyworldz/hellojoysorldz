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
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/marquee",
    thumb: thumb01,
    title: "Marquee",
    desc:
      "transform을 사용하여 x축으로 이동하여\n" + "marquee 효과를 주었습니다.",
  },
  {
    id: "02",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/wave",
    thumb: thumb02,
    title: "Wave Effect",
    desc:
      "같은 animation 효과에 움직이는 시간을 다르게 하여\n" +
      "출렁거리는 물결 효과를 주었습니다.",
  },
  {
    id: "03",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/sticky",
    thumb: thumb03,
    title: "Sticky Effect",
    desc:
      "display: flex를 사용하여 이미지를 가운데 정렬하였고,\n" +
      "position: sticky를 사용하여 겹겹이 쌓이는 효과를 만들었습니다.",
  },
  {
    id: "04",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/todo",
    thumb: thumb04,
    title: "Todo List",
    desc:
      "before, after 가상요소를 사용하여\n" + "checkbox 디자인을 하였습니다.",
  },
  {
    id: "05",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/card",
    thumb: thumb05,
    title: "Shiny Card",
    desc:
      "background-clip 를 사용하여 글씨에 은박 효과를 주었습니다.\n" +
      "transform : rotate 를 사용하여 움직이는 효과를 주었습니다.",
  },
  {
    id: "06",
    site: "https://hellojoyworldz.github.io/webs/myCSS/animation/snowball",
    thumb: thumb06,
    title: "Snowball",
    desc:
      "background gradient를 사용하여\n" +
      "스노우볼이 움직이는 트렉에 생동감있는 효과를 주었습니다.",
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
