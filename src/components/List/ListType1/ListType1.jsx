import "./ListType1.style.scss";
import defaultIcon from "../../../assets/images/mainCate__itemIcon01.png";
import defaultThumb from "../../../assets/images/mainCate__itemBg01.jpg";

const ListType1 = ({ items }) => {
  return (
    <div className="listType1">
      <div
        className="listType1__list"
        data-scroll
        data-scroll-speed="8"
        data-scroll-direction="horizontal"
      >
        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="list__item">
              {item.title && (
                <strong className="list__tit">{item.title}</strong>
              )}
              <span className="list__icon">
                <img src={item.icon || defaultIcon} alt="" />
              </span>
              <span className="list__thumb">
                <img src={item.thumb || defaultThumb} alt="" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListType1;
