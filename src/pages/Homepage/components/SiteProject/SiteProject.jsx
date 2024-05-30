import "./SiteProject.style.scss";
import SiteProjectItem from "./SiteProjectItem";
import img01 from "../../../../assets/images/mainReact__img01.jpg";
import img02 from "../../../../assets/images/mainReact__img02.jpg";
import img03 from "../../../../assets/images/mainReact__img03.jpg";
import img04 from "../../../../assets/images/mainReact__img04.jpg";

const items = [
  {
    id: 1,
    type: "react",
    desc: "첫 번째로 제작한 React 사이트입니다.",
    title: "title",
    github: "site",
    site: "url",
    thumb: img01,
  },
  {
    id: 2,
    type: "react",
    desc: "두 번째로 제작한 React 사이트입니다.",
    title: "title",
    github: "site",
    site: "url",
    thumb: img02,
  },
];
const SiteProject = () => {
  return (
    <section className="mainFront" data-bgcolor="#c2aeec">
      <h2 className="mainFront__tit">
        Hello✋🏻
        <br />
        My SideProject
      </h2>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <SiteProjectItem
              type={item.type}
              title={item.title}
              desc={item.desc}
              github={item.github}
              site={item.site}
              thumb={item.thumb}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SiteProject;
