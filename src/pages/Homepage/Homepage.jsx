import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import locomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Visual from "./components/Visual/Visual";
import Intro from "./components/Intro/Intro";
import SiteProject from "./components/SiteProject/SiteProject";
import SitePublishing from "./components/SitePublishing/SitePublishing";
import Banner from "./components/Banner/Banner";
import SiteCss from "./components/SiteCss/SiteCss";
import SiteJavaScript from "./components/SiteJavaScript/SiteJavaScript";
import Profile from "./components/Profile/Profile";

const Homepage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.setAttribute("data-scroll-container", "");

    // locomotive
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    // 배경 색상 변경
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: scrollRef.current,
        start: "top 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto",
          }),
      });
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div id="contents" ref={scrollRef}>
      <main className="main">
        <Visual bgcolor={"#fff"} />
        <Intro bgcolor={"#f5feff"} />
        <SiteProject bgcolor={"#c2aeec"} />
        <SitePublishing bgcolor={"#310591"} scroller={scrollRef} />
        <Banner bgcolor={"#fde445"} />
        <SiteCss bgcolor={"#f5f5f5"} />
        <SiteJavaScript bgcolor={"#f6f3ff"} />
        <Profile bgcolor={"#ff7896"} />
      </main>
    </div>
  );
};

export default Homepage;
