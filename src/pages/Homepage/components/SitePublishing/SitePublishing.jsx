import "./sitePublishing.style.scss";
import SitePublishingItem from "./SitePublishingItem";
import titleImg from "../../../../assets/images/mainSite__tit.png";
import emoji01 from "../../../../assets/images/mainSite__emojiImg01.png";
import emoji02 from "../../../../assets/images/mainSite__emojiImg02.png";
import emoji03 from "../../../../assets/images/mainSite__emojiImg03.png";
import emojiBg from "../../../../assets/images/mainSite__emojiBg.png";
import thumb01 from "../../../../assets/images/mainSite__thumb01.jpg";
import thumb02 from "../../../../assets/images/mainSite__thumb02.jpg";
import thumb03 from "../../../../assets/images/mainSite__thumb03.jpg";
import thumb04 from "../../../../assets/images/mainSite__thumb04.jpg";
import thumb05 from "../../../../assets/images/mainSite__thumb05.jpg";
import img01 from "../../../../assets/images/mainSite__img01.jpg";

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

const SitePublishing = () => {
  return (
    <section className="mainSite horizontal-scroll" data-bgcolor="#310591">
      <div className="pin-wrap">
        <div className="mainSite__header">
          <h2 className="mainSite__tit">
            Hello,
            <br />
            My Publishing Site
            <span className="mainSite__titImg">
              <img src={titleImg} alt="" />
            </span>
          </h2>
          <div className="mainSite__emoji">
            <div className="mainSite__emojiBg">
              <span>
                <img src={emojiBg} alt="" />
              </span>
            </div>

            <div className="mainSite__emojiCircle">
              <span
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
              >
                <img src={emoji02} alt="" />
              </span>
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-direction="vertical"
              >
                <img src={emoji02} alt="" />
              </span>
              <span
                data-scroll
                data-scroll-speed="4"
                data-scroll-direction="vertical"
              >
                <img src={emoji03} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {items.map((item) => (
        <SitePublishingItem
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          site={item.site}
          thumb={item.thumb}
        />
      ))}
    </section>
  );
};

export default SitePublishing;
