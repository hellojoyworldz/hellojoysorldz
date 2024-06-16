import "./SitePublishing.style.scss";
import thumb01 from "../../../../assets/images/mainSite__thumb01.jpg";
import thumb02 from "../../../../assets/images/mainSite__thumb02.jpg";
import thumb03 from "../../../../assets/images/mainSite__thumb03.jpg";
import thumb04 from "../../../../assets/images/mainSite__thumb04.jpg";
import thumb05 from "../../../../assets/images/mainSite__thumb05.jpg";

import TitleType3 from "../../../../components/Title/TitleType3/TitleType3";
import ListType3 from "../../../../components/List/ListType3/ListType3";

const items = [
  {
    id: "01",
    title: "Lee Seung Gi",
    desc: "데스크탑, 모바일 UI 개발\n" + "참여도 100%",
    site: "http://hookent.webmaker21.kr/?device=pc",
    thumb: thumb01,
  },
  {
    id: "02",
    title: "DSP Media",
    desc: "반응형 UI 개발\n" + "참여도 100%",
    site: "http://dspmedia.co.kr/",
    thumb: thumb02,
  },
  {
    id: "03",
    title: "Amway\nFoundation",
    desc: "반응형 UI 개발\n" + "참여도 100%",
    site: "https://www.afuture.or.kr/",
    thumb: thumb03,
  },
  {
    id: "03",
    title: "more",
    desc: "그 외 작업물",
    site: "https://hellojoyworldz.github.io/myWork/work/",
    thumb: thumb05,
  },
];

const SitePublishing = ({ bgcolor }) => {
  return (
    <ListType3
      bgcolor={bgcolor}
      titleType={<TitleType3 title={" Hello,\nMy Publishing Site"} />}
      items={items}
    />
  );
};

export default SitePublishing;
