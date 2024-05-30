import "./SitePublishingItem.style.scss";

const SitePublishingItem = ({ id, title, desc, site, thumb }) => {
  return (
    <div className="list__item">
      <div className="list__info">
        {id && <span className="list__num">{id}</span>}
        {title && <strong className="list__tit">{title}</strong>}
        {desc && <p className="list__desc">{desc}</p>}
      </div>
      <span className="list__thumb">
        <a href={site} target="_blank">
          <img className="list__img" src={thumb} alt="" />
        </a>
      </span>
    </div>
  );
};

export default SitePublishingItem;
