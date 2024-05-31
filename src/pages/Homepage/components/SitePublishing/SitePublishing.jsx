import "./sitePublishing.style.scss";
import thumb01 from "../../../../assets/images/mainSite__thumb01.jpg";
import thumb02 from "../../../../assets/images/mainSite__thumb02.jpg";
import thumb03 from "../../../../assets/images/mainSite__thumb03.jpg";
import thumb04 from "../../../../assets/images/mainSite__thumb04.jpg";
import thumb05 from "../../../../assets/images/mainSite__thumb05.jpg";
import img01 from "../../../../assets/images/mainSite__img01.jpg";

import TitleType3 from "../../../../components/Title/TitleType3/TitleType3";
import ListType3 from "../../../../components/List/ListType3/ListType3";

const items = [
  {
    id: "01",
    title: "title",
    desc: "desc",
    site: "url",
    thumb: thumb01,
  },
  {
    id: "02",
    title: "title2",
    desc: "desc2",
    site: "url",
    thumb: thumb02,
  },
];

const SitePublishing = ({ bgcolor, scroller }) => {
  return (
    <ListType3
      bgcolor={bgcolor}
      scroller={scroller}
      titleType={<TitleType3 title={" Hello,\nMy Publishing Site"} />}
      items={items}
    />
  );
};

export default SitePublishing;
