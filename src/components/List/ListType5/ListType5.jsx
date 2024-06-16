import "./ListType5.style.scss";
import defaultImg from "../../../assets/images/mainCode__img01.jpg";

const ListType5 = ({ items }) => {
  return (
    <div className="listType5">
      <ul className="list">
        {items.map((item) => (
          <li className={`list__item item${item.id}`} key={item.id}>
            {item.site && (
              <a href={item.site} target="_blank" className="list__link"></a>
            )}
            {item.title && <strong className="list__tit">{item.title}</strong>}
            {item.type && <span className="list__cate">{item.type}</span>}
            <span className="list__thumb">
              <img
                className="list__img"
                src={item.thumb || defaultImg}
                alt=""
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListType5;
