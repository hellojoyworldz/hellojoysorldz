import "./SiteJavaScript.style.scss";
import titleImg from "../../../../assets/images/icon__tit03.png";
import thumb01 from "../../../../assets/images/mainCode__img01.jpg";
import thumb02 from "../../../../assets/images/mainCode__img02.jpg";
import thumb03 from "../../../../assets/images/mainCode__img05.jpg";
import thumb04 from "../../../../assets/images/mainCode__img06.jpg";
import thumb05 from "../../../../assets/images/mainCode__img07.jpg";
import thumb06 from "../../../../assets/images/mainCode__img09.jpg";
import thumb07 from "../../../../assets/images/mainCode__img10.jpg";
import SiteJavaScriptItem from "./SiteJavaScriptItem";

const items = [
  {
    id: "01",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb01,
  },
  {
    id: "02",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb02,
  },
  {
    id: "03",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb03,
  },
  {
    id: "04",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb04,
  },
  {
    id: "05",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb05,
  },
  {
    id: "06",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb06,
  },
  {
    id: "07",
    title: "title",
    type: "JavaScript",
    site: "url",
    thumb: thumb07,
  },
];

const SiteJavaScript = () => {
  return (
    <section className="mainCode" data-bgcolor="#f6f3ff">
      <h2 className="mainCode__tit">
        Hello,
        <br />
        My
        <span className="highlight">
          JavaScript
          <img src={titleImg} alt="" />
        </span>
      </h2>

      <ul className="list">
        {items.map((item) => (
          <li className={`list__item item${item.id}`} key={item.id}>
            <SiteJavaScriptItem
              id={item.id}
              title={item.title}
              type={item.type}
              site={item.site}
              thumb={item.thumb}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SiteJavaScript;
