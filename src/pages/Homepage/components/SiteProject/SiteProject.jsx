import "./SiteProject.style.scss";
import img01 from "../../../../assets/images/mainReact__img01.jpg";
import img02 from "../../../../assets/images/mainReact__img02.jpg";
import img03 from "../../../../assets/images/mainReact__img03.jpg";
import img04 from "../../../../assets/images/mainReact__img04.jpg";

import TitleType2 from "../../../../components/Title/TitleType2/TitleType2";
import ListType2 from "../../../../components/List/ListType2/ListType2";

const items = [
  {
    id: "01",
    type: "react",
    desc: "첫 번째로 제작한 React 사이트입니다.",
    title: "title",
    github: "site",
    site: "url",
    thumb: img01,
  },
  {
    id: "02",
    type: "react",
    desc: "두 번째로 제작한 React 사이트입니다.",
    title: "title",
    github: "site",
    site: "url",
    thumb: img02,
  },
];
const SiteProject = ({ bgcolor }) => {
  return (
    <section className="mainFront" data-bgcolor={bgcolor}>
      <TitleType2 title={"Hello✋🏻\nMy SideProject"} />
      <ListType2 items={items} />
    </section>
  );
};

export default SiteProject;
