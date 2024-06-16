import "./SiteJavaScript.style.scss";
import titleImg from "../../../../assets/images/icon__tit03.png";
import thumb01 from "../../../../assets/images/mainCode__img01.jpg";
import thumb02 from "../../../../assets/images/mainCode__img02.jpg";
import thumb03 from "../../../../assets/images/mainCode__img05.jpg";
import thumb04 from "../../../../assets/images/mainCode__img06.jpg";
import thumb05 from "../../../../assets/images/mainCode__img07.jpg";
import thumb06 from "../../../../assets/images/mainCode__img09.jpg";
import thumb07 from "../../../../assets/images/mainCode__img10.jpg";

import TitleType5 from "../../../../components/Title/TitleType5/TitleType5";
import ListType5 from "../../../../components/List/ListType5/ListType5";

const items = [
  {
    id: "01",
    title: "Music\n" + "Player",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/music",
    thumb: thumb01,
  },
  {
    id: "02",
    title: "Drawing",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/drawing",
    thumb: thumb02,
  },
  {
    id: "03",
    title: "Memory\n" + "Game",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/memory",
    thumb: thumb03,
  },
  {
    id: "04",
    title: "Typing\n" + "Game",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/typing",
    thumb: thumb04,
  },
  {
    id: "05",
    thumb: thumb05,
  },
  {
    id: "06",
    title: "Coin flip",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/coin",
    thumb: thumb06,
  },
  {
    id: "07",
    title: "Calendar",
    type: "JavaScript",
    site: "https://hellojoyworldz.github.io/webs/myJS/game/calendar",
    thumb: thumb07,
  },
];

const SiteJavaScript = ({ bgcolor }) => {
  return (
    <section className="mainCode" data-bgcolor={bgcolor}>
      <TitleType5 title={"hello,"} subtitle={"My"} hightlight={"JavaScript"} />
      <ListType5 items={items} />
    </section>
  );
};

export default SiteJavaScript;
