import "./SiteCssItem.style.scss";

const SiteCssItem = ({ site, thumb, title, desc }) => {
  return (
    <li className="list__item">
      {site && <a className="list__link" target="_blank" href={site}></a>}
      <div className="list__thumb">
        <span
          className="list__thumbGif"
          style={{ backgroundImage: `url(${thumb})` }}
        ></span>
      </div>
      <div className="list__info">
        <strong className="list__tit">Marquee</strong>
        <p className="list__desc">
          transform을 사용하여 x축으로 이동하여 <br />
          marquee 효과를 주었습니다.
        </p>
      </div>
    </li>
  );
};

export default SiteCssItem;
