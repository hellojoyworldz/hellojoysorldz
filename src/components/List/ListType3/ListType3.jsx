import "./ListType3.style.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import emojiBg from "../../../assets/images/mainSite__emojiBg.png";
import emoji01 from "../../../assets/images/mainSite__emojiImg01.png";
import emoji02 from "../../../assets/images/mainSite__emojiImg02.png";
import emoji03 from "../../../assets/images/mainSite__emojiImg03.png";

const ListType3 = ({ bgcolor, scroller, titleType, items }) => {
  const horizontalSectionRef = useRef(null);
  const pinWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSection = horizontalSectionRef.current;
    const pinWrap = pinWrapRef.current;
    const pinWrapWidth = pinWrap.offsetWidth;
    const horizontalScrollLength = pinWrapWidth - window.innerWidth;

    const pin = gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: scroller.current,
        trigger: horizontalSection,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        scrub: true,
        pin: true,
        markers: false,
        invalidateOnRefresh: true,
      },
      x: -horizontalScrollLength,
      ease: "none",
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div
      className="listType3 horizontal-scroll"
      data-bgcolor={bgcolor}
      ref={horizontalSectionRef}
    >
      <div className="pin-wrap" ref={pinWrapRef}>
        <div className="listType3__header">
          {titleType}
          <div className="listType3__emoji">
            <div className="listType3__emojiBg">
              <span>
                <img src={emojiBg} alt="" />
              </span>
            </div>

            <div className="listType3__emojiCircle">
              <span
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
              >
                <img src={emoji01} alt="" />
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

        {items.map((item) => (
          <div className="list__item" key={item.id}>
            <div className="list__info">
              {item.id && <span className="list__num">{item.id}</span>}
              {item.title && (
                <strong className="list__tit">{item.title}</strong>
              )}
              {item.desc && <p className="list__desc">{item.desc}</p>}
            </div>
            <span className="list__thumb">
              <a href={item.site} target="_blank">
                <img className="list__img" src={item.thumb} alt="" />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListType3;
