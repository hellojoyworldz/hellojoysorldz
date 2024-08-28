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
        desc: `디자인 시스템에 대한 모든 것을 알려주는 AI 챗봇 입니다.\n\n이미지 기반 대화를 지원하며, SSE 방식으로 실시간 응답을 제공합니다. 또한 API 키 노출 방지를 위해 Express.js로 백엔드 서버를 구축하여 OpenAI API 호출 로직을 구현하였습니다.`,
        title: "디자인 시스템에 특화된 AI 챗봇💬",
        github: "https://github.com/hellojoyworldz/ChatGPT-for-design-system",
        site: "https://chat-gpt-for-design-system-plugin.vercel.app/",
        thumb: `https://github.com/user-attachments/assets/b42a4bd4-8af6-422c-82b3-9f69e6be2f8f`,
        speed: 1,
      },
      {
        id: "02",
        type: "react",
        desc: "포트폴리오를 npm 패키지로 배포하여 라이브러리로 제작하였습니다.\n\nSCSS 변수와 믹스인으로 디자인 시스템을 구축하였고 TypeScript를 사용하여 잘못된 디자인 토큰값이 전달되는것을 방지하였습니다.",
        title: "React 포트폴리오 컴포넌트 라이브러리",
        github:
          "https://github.com/hellojoyworldz/react-portfolio-component-library",
        site: "https://www.npmjs.com/package/react-portfolio-component-library",
        thumb: `https://camo.githubusercontent.com/40a8f48c47e20f6d2260b3155b3dbf48bdbc24ce48ff6f60e78c7cd0a689abf4/68747470733a2f2f76656c6f672e76656c63646e2e636f6d2f696d616765732f68656c6c6f6a6f79776f726c647a2f706f73742f31643266346134352d646139652d343261332d613932362d3637633234316662313038652f696d6167652e676966`,
        speed: 3,
      },
      {
        id: "03",
        type: "react",
        desc: "TMDB API를 활용한 영화 추천 웹사이트입니다. \n\nReact Query를 통해 영화 데이터를 비동기적으로 관리합니다. 사용자는 인기 영화, 평점 높은 영화, 상영 예정작을 볼 수 있고, 영화 상세 정보와 검색, 필터링 기능도 제공합니다",
        title: "Movie-App",
        github:
          "https://github.com/hellojoyworldz/lego-project/tree/main/movie-app",
        site: "https://movie-app-react-sa.netlify.app/",
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
    title: "Hello,\nMy Work Experience",
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
        title: "Amway\nFuture-Foundation",
        desc: "반응형 UI 개발\n" + "참여도 100%",
        site: "https://www.afuture.or.kr/",
        thumb: `${IMG_PATH}/mainSite__thumb03.jpg`,
      },
      {
        id: "04",
        title: "more",
        desc: "그 외 작업물",
        site: "https://docs.google.com/spreadsheets/d/1jXh5vqdmWQk-j75eBMaGQGPAG2jdtDxmLR7cPIN3oCw/edit?usp=sharing",
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
      info: {
        name: "Gwak Sunah",
        email: "hellojoyworldz@gmail.com",
        phone: "+82 10-9783-6375",
        portfolio: "https://hellojoyworldz.netlify.app/",
        github: "https://github.com/hellojoyworldz",
        blog: "https://velog.io/@hellojoyworldz/",
      },
    },
  },
};

export default portfolioData;
