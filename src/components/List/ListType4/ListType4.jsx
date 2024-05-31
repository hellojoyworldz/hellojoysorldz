import "./ListType4.style.scss";
import defaultImg from "../../../assets/images/mainCss__marquee.gif";
const ListType4 = ({ items }) => {
  return (
    <div className="listType4">
      <ul className="list">
        {items.map((item) => (
          <li className="list__item" key={item.id}>
            {item.site && (
              <a className="list__link" target="_blank" href={item.site}></a>
            )}

            <div className="list__thumb">
              <span
                className="list__thumbGif"
                style={{ backgroundImage: `url(${item.thumb || defaultImg})` }}
              ></span>
            </div>

            <div className="list__info">
              {item.title && (
                <strong className="list__tit">{item.title}</strong>
              )}
              {item.desc && <p className="list__desc">{item.desc}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListType4;
