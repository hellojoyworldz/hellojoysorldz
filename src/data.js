const IMG_PATH =
  "https://raw.githubusercontent.com/hellojoyworldz/myPORTFOLIO/ver_html/assets/img";
const portfolioData = {
  header: {
    title: "FE\nDEVELOPER ",
  },
  visual: {
    title: {
      main: "G.SUNAH\nPORTFOLIO",
      badge: "HELLO, WORLD!",
      move: "I'M FRONTEND DEVELOPER ",
    },
  },
  intro: {
    title: {
      main: "Plan and\norgnize\n",
      highlight: "anything",
    },
    items: [
      {
        id: "01",
        title: "Blog",
      },
      {
        id: "02",
        title: "JavaScript &\n CSS Animation",
      },
      {
        id: "03",
        title: `Work &\n Projects`,
      },
      {
        id: "04",
        title: `Website &\n Portfolio`,
      },
      {
        id: "05",
        title: `Contact Me`,
      },
    ],
  },
  listNormal: {
    title: "Hello✋🏻\nMy SideProject",
    items: [
      {
        id: "01",
        type: "react",
        desc: "섹션 별로 jsx 파일을 만들어 export 한 후 App.js에서 import 하여 받아와 컴포넌트 단위로 사이트를 제작하였습니다. 또한 props를 사용하여 폰트명, 배경색 등을 전달하고 적용시켰습니다.",
        title: "Auckland",
        github:
          "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_site1",
        site: "https://subtle-caramel-58a09a.netlify.app/",
        thumb: `${IMG_PATH}/mainReact__img01.jpg`,
        speed: 1,
      },
      {
        id: "02",
        type: "react",
        desc: "npm을 통해 Swiper를 설치하여 Autoplay와 loop 기능이 추가된 슬라이드를 구현하였고, SCSS를 사용해 스타일링 하였습니다.",
        title: "Hotels Combined",
        github:
          "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_site2",
        site: "https://nimble-marzipan-2527bd.netlify.app/",
        thumb: `${IMG_PATH}/mainReact__img02.jpg`,
        speed: 3,
      },
      {
        id: "03",
        type: "react",
        desc:
          "API를 활용한 React 사이트입니다.\n" +
          "TMDB , Youtube , Unsplash API를 활용하여 영화, 영상, 이미지 검색 기능을 제작하였고 BrowserRouter를 사용하여 URL 주소에 따라 다른 화면을 렌더링 해주었습니다.",
        title: "API Site",
        github:
          "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_site3",
        site: "https://creative-cheesecake-090cdf.netlify.app/",
        thumb: `${IMG_PATH}/mainReact__img03.jpg`,
        speed: 2,
      },
      {
        id: "04",
        type: "react",
        desc:
          "Youtube API를 활용한 REACT 사이트입니다.\n" +
          "왼쪽 메뉴를 클릭하면 해당 키워드로 검색한 결과를 보여주고, useState와 onChange를 사용하여 input value 값 설정을 해주었습니다.",
        title: "Youtube API",
        github:
          "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_youtube",
        site: "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_youtube",
        thumb: `${IMG_PATH}/mainReact__img04.jpg`,
        speed: 3,
      },
      {
        id: "05",
        type: "vue",
        desc:
          "Vue 사이트 입니다.\n" +
          "섹션을 컴포넌트단위로 나누어 작업하였습니다.",
        title: "Vue Site",
        github:
          "https://github.com/hellojoyworldz/webs/tree/master/myVUE/vue_site1",
        site: "https://myvue-joy.web.app/",
        thumb: `${IMG_PATH}/mainVue__img01.jpg`,
        speed: 1,
      },
    ],
  },
  listHorizontal: {
    title: "Hello,\nMy Publishing Site",
    items: [
      {
        id: "01",
        title: "Lee Seung Gi",
        desc: "데스크탑, 모바일 UI 개발\n" + "참여도 100%",
        site: "http://hookent.webmaker21.kr/?device=pc",
        thumb: `${IMG_PATH}/mainSite__thumb01.jpg`,
      },
      {
        id: "02",
        title: "DSP Media",
        desc: "반응형 UI 개발\n" + "참여도 100%",
        site: "http://dspmedia.co.kr/",
        thumb: `${IMG_PATH}/mainSite__thumb02.jpg`,
      },
      {
        id: "03",
        title: "Amway\nFoundation",
        desc: "반응형 UI 개발\n" + "참여도 100%",
        site: "https://www.afuture.or.kr/",
        thumb: `${IMG_PATH}/mainSite__thumb03.jpg`,
      },
      {
        id: "04",
        title: "more",
        desc: "그 외 작업물",
        site: "https://hellojoyworldz.github.io/myWork/work/",
        thumb: `${IMG_PATH}/mainSite__img01.jpg`,
      },
    ],
  },
  listCard: {
    title: {
      main: "Hello,",
      highlight: "MyCSS Animation",
    },
    items: [
      {
        id: "01",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/marquee",
        thumb: `${IMG_PATH}/mainCss__marquee.gif`,
        title: "Marquee",
        desc:
          "transform을 사용하여 x축으로 이동하여\n" +
          "marquee 효과를 주었습니다.",
      },
      {
        id: "02",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/wave",
        thumb: `${IMG_PATH}/mainCss__wave.gif`,
        title: "Wave Effect",
        desc:
          "같은 animation 효과에 움직이는 시간을 다르게 하여\n" +
          "출렁거리는 물결 효과를 주었습니다.",
      },
      {
        id: "03",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/sticky",
        thumb: `${IMG_PATH}/mainCss__sticky.gif`,
        title: "Sticky Effect",
        desc:
          "display: flex를 사용하여 이미지를 가운데 정렬하였고,\n" +
          "position: sticky를 사용하여 겹겹이 쌓이는 효과를 만들었습니다.",
      },
      {
        id: "04",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/todo",
        thumb: `${IMG_PATH}/mainCss__todo.gif`,
        title: "Todo List",
        desc:
          "before, after 가상요소를 사용하여\n" +
          "checkbox 디자인을 하였습니다.",
      },
      {
        id: "05",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/card",
        thumb: `${IMG_PATH}/mainCss__card.gif`,
        title: "Shiny Card",
        desc:
          "background-clip 를 사용하여 글씨에 은박 효과를 주었습니다.\n" +
          "transform : rotate 를 사용하여 움직이는 효과를 주었습니다.",
      },
      {
        id: "06",
        site: "https://hellojoyworldz.github.io/webs/myCSS/animation/snowball",
        thumb: `${IMG_PATH}/mainCss__snowball.gif`,
        title: "Snowball",
        desc:
          "background gradient를 사용하여\n" +
          "스노우볼이 움직이는 트렉에 생동감있는 효과를 주었습니다.",
      },
    ],
  },
  listLego: {
    title: {
      main: "Hello,",
      highlight: "My JavaScript",
    },
    items: [
      {
        id: "01",
        title: "Music\nPlayer",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/music",
        thumb: `${IMG_PATH}/mainCode__img01.jpg`,
      },
      {
        id: "02",
        title: "Drawing",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/drawing",
        thumb: `${IMG_PATH}/mainCode__img02.jpg`,
      },
      {
        id: "03",
        title: "Memory\nGame",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/memory",
        thumb: `${IMG_PATH}/mainCode__img05.jpg`,
      },
      {
        id: "04",
        title: "Typing\nGame",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/typing",
        thumb: `${IMG_PATH}/mainCode__img06.jpg`,
      },
      {
        id: "05",
        thumb: `${IMG_PATH}/mainCode__img07.jpg`,
      },
      {
        id: "06",
        title: "Coin flip",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/coin",
        thumb: `${IMG_PATH}/mainCode__img09.jpg`,
      },
      {
        id: "07",
        title: "Calendar",
        type: "JavaScript",
        site: "https://hellojoyworldz.github.io/webs/myJS/game/calendar",
        thumb: `${IMG_PATH}/mainCode__img10.jpg`,
      },
    ],
  },
  profile: {
    data: {
      textpath: "Welcome My Portfolio Site · Hello My World ·",
      footersbj: "IMPOSSIBLE IS NOTING · ",
      notice: "더 좋은 결과를 위해 계속 수정 중에 있습니다",
      photo: `${IMG_PATH}/IMG_0419.JPG`,
      info: {
        name: "Gwak Sunah",
        email: "hellojoyworldz@gmail.com",
        phone: "+82 10-9783-6375",
        portfolio: "https://hellojoyworldz.netlify.app/",
        github: "https:/github.com/hellojoyworldz",
        blog: "https://velog.io/@hellojoyworldz/",
      },
    },
  },
};

export default portfolioData;
