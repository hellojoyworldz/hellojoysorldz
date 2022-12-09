window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#contents");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true,
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
  });

  // Pinning and horizontal scrolling
  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach((horizontalSection) => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        markers: false,
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: -horizontalScrollLength,
      ease: "none",
    });
  });

  /* COLOR CHANGER */
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
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

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();

  //loading();
});

document.addEventListener("load", () => {
  setTimeout(() => {}, 1000);
});

//로딩소스
function loading() {
  const header = document.querySelector("#header");
  let loader = document.querySelector(".loading");
  let loaderBar = document.querySelector(".loading__bar");
  let loaderText = document.querySelector(".loading__text");
  let num = 0;
  let interval = setInterval(progress);

  let mainText = document.querySelector(".visual__tit");
  let mainText2 = document.querySelector(".visual__sbj--move");
  let mainImg = document.querySelector(".visual__emoji");

  imagesLoaded(document.querySelector("html"), interval);

  function progress() {
    num++;
    loaderBar.style.width = num + "%";
    loaderText.innerText = num + "%";

    if (num === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.display = "none";

        gsap.from(header, { duration: 0.8, opacity: 0, delay: 0.1 });
        gsap.from(mainText, { duration: 0.8, y: -20, opacity: 0, delay: 0.4 });
        gsap.from(mainText2, { duration: 1.8, x: 20, opacity: 0, delay: 0.6 });
        gsap.from(mainImg, { duration: 1.5, opacity: 0, delay: 0.8 });
      }, 500);
    }
  }
}
