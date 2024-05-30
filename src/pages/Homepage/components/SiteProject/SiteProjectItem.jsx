import "./SiteProjectItem.style.scss";
import defaultThumb from "../../../../assets/images/mainReact__img01.jpg";

const SiteProjectItem = ({ type, title, desc, github, site, thumb }) => {
  return (
    <div
      className="list__item"
      data-scroll
      data-scroll-speed="1"
      data-scroll-direction="vertical"
    >
      <div className="list__info">
        {type && <span className="list__cate cate--react">{type}</span>}
        {title && <strong className="list__tit">{title}</strong>}
        {desc && <div className="list__desc">{desc}</div>}
        <div className="list__type">
          {github && (
            <a href={github} target="_blank" className="list__typeLink">
              Github
            </a>
          )}
          {site && (
            <a href={site} target="_blank" className="list__typeLink">
              Site
            </a>
          )}
        </div>
      </div>
      <div className="list__thumb">
        <a href={site || github} target="_blank">
          <img data-speed="auto" src={thumb || defaultThumb} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SiteProjectItem;
