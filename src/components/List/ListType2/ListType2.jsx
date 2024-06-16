import "./ListType2.style.scss";

const ListType2 = ({ items }) => {
  return (
    <div className="listType2">
      <ul className="list">
        {items.map((item) => (
          <li
            key={item.id}
            className="list__item"
            data-scroll
            data-scroll-speed="3"
            ata-scroll-direction="vertical"
          >
            <div className="list__info">
              {item.type && (
                <span className="list__cate cate--react">{item.type}</span>
              )}
              {item.title && (
                <strong className="list__tit">{item.title}</strong>
              )}
              {item.desc && <div className="list__desc">{item.desc}</div>}
              <div className="list__type">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    className="list__typeLink"
                  >
                    Github
                  </a>
                )}
                {item.site && (
                  <a
                    href={item.site}
                    target="_blank"
                    className="list__typeLink"
                  >
                    Site
                  </a>
                )}
              </div>
            </div>
            {item.thumb && (
              <div className="list__thumb">
                <a href={item.site || item.github} target="_blank">
                  <img data-speed="auto" src={item.thumb} alt="" />
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListType2;
