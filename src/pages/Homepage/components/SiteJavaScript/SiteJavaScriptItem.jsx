const SiteJavaScriptItem = ({ title, type, site, thumb }) => {
  return (
    <>
      {site && <a href={site} target="_blank" className="list__link"></a>}
      {title && <strong className="list__tit">{title}</strong>}
      {type && <span className="list__cate">{type}</span>}
      <span className="list__thumb">
        <img className="list__img" src={thumb} alt="" />
      </span>
    </>
  );
};

export default SiteJavaScriptItem;
