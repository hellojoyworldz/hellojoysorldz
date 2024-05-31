import "./Intro.style.scss";
import icon01 from "../../../../assets/images/mainCate__itemIcon01.png";
import icon02 from "../../../../assets/images/mainCate__itemIcon02.png";
import icon03 from "../../../../assets/images/mainCate__itemIcon03.png";
import icon04 from "../../../../assets/images/mainCate__itemIcon04.png";
import icon05 from "../../../../assets/images/mainCate__itemIcon05.png";
import thumb01 from "../../../../assets/images/mainCate__itemBg01.jpg";
import thumb02 from "../../../../assets/images/mainCate__itemBg02.jpg";
import thumb03 from "../../../../assets/images/mainCate__itemBg03.jpg";
import thumb04 from "../../../../assets/images/mainCate__itemBg04.jpg";
import thumb05 from "../../../../assets/images/mainCate__itemBg05.jpg";

import TitleType1 from "../../../../components/Title/TitleType1/TitleType1";
import ListType1 from "../../../../components/List/ListType1/ListType1";

const title = {
  title: "Plan and\norgnize\n",
  highlight: "anything",
};

const items = [
  {
    id: "01",
    title: "Blog",
    icon: icon01,
    thumb: thumb01,
  },
  {
    id: "02",
    title: "JavaScript &\n CSS Animation",
    icon: icon02,
    thumb: thumb02,
  },
  {
    id: "03",
    title: `Work &\n Projects`,
    icon: icon03,
    thumb: thumb03,
  },
  {
    id: "04",
    title: `Website &\n Portfolio`,
    icon: icon04,
    thumb: thumb04,
  },
  {
    id: "05",
    title: `Contact Me`,
    icon: icon05,
    thumb: thumb05,
  },
];

const Intro = ({ bgcolor }) => {
  return (
    <section className="mainCate" data-bgcolor={bgcolor}>
      <TitleType1 title={title.title} highlight={title.highlight} />
      <ListType1 items={items} />
    </section>
  );
};

export default Intro;
