import "./Intro.style.scss";
import IntroItem from "./IntroItem";
import itemIcon01 from "../../../../assets/images/mainCate__itemIcon01.png";
import itemIcon02 from "../../../../assets/images/mainCate__itemIcon02.png";
import itemIcon03 from "../../../../assets/images/mainCate__itemIcon03.png";
import itemIcon04 from "../../../../assets/images/mainCate__itemIcon04.png";
import itemIcon05 from "../../../../assets/images/mainCate__itemIcon05.png";
import itemBg01 from "../../../../assets/images/mainCate__itemBg01.jpg";
import itemBg02 from "../../../../assets/images/mainCate__itemBg02.jpg";
import itemBg03 from "../../../../assets/images/mainCate__itemBg03.jpg";
import itemBg04 from "../../../../assets/images/mainCate__itemBg04.jpg";
import itemBg05 from "../../../../assets/images/mainCate__itemBg05.jpg";

const items = [
  {
    id: 1,
    title: "Blog",
    icon: itemIcon01,
    thumb: itemBg01,
  },
  {
    id: 2,
    title: "JavaScript &\n CSS Animation",
    icon: itemIcon02,
    thumb: itemBg02,
  },
  {
    id: 3,
    title: `Work &\n Projects`,
    icon: itemIcon03,
    thumb: itemBg03,
  },
  {
    id: 4,
    title: `Website &\n Portfolio`,
    icon: itemIcon04,
    thumb: itemBg04,
  },
  {
    id: 5,
    title: `Contact Me`,
    icon: itemIcon05,
    thumb: itemBg05,
  },
];

const Intro = () => {
  return (
    <section className="mainCate" data-bgcolor="#f5feff">
      <h2 className="mainCate__tit">
        Plan and
        <br />
        orgnize
        <br />
        <span className="highlight">anything</span>
      </h2>
      <div className="mainCate__listWrap">
        <div
          className="mainCate__list"
          data-scroll
          data-scroll-speed="8"
          data-scroll-direction="horizontal"
        >
          <ul className="list">
            {items.map((item) => (
              <li key={item.id}>
                <IntroItem
                  title={item.title}
                  icon={item.icon}
                  thumb={item.thumb}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
