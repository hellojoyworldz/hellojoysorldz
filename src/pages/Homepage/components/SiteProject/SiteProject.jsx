import "./SiteProject.style.scss";
import img01 from "../../../../assets/images/mainReact__img01.jpg";
import img02 from "../../../../assets/images/mainReact__img02.jpg";
import img03 from "../../../../assets/images/mainReact__img03.jpg";
import img04 from "../../../../assets/images/mainReact__img04.jpg";
import img05 from "../../../../assets/images/mainVue__img01.jpg";

import TitleType2 from "../../../../components/Title/TitleType2/TitleType2";
import ListType2 from "../../../../components/List/ListType2/ListType2";

const items = [
  {
    id: "01",
    type: "react",
    desc: "섹션 별로 jsx 파일을 만들어 export 한 후 App.js에서 import 하여 받아와 컴포넌트 단위로 사이트를 제작하였습니다. 또한 props를 사용하여 폰트명, 배경색 등을 전달하고 적용시켰습니다.",
    title: "Auckland",
    github:
      "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_site1",
    site: "https://subtle-caramel-58a09a.netlify.app/",
    thumb: img01,
  },
  {
    id: "02",
    type: "react",
    desc: "npm을 통해 Swiper를 설치하여 Autoplay와 loop 기능이 추가된 슬라이드를 구현하였고, SCSS를 사용해 스타일링 하였습니다.",
    title: "Hotels Combined",
    github:
      "https://github.com/hellojoyworldz/webs/tree/master/myREACT/react_site2",
    site: "https://nimble-marzipan-2527bd.netlify.app/",
    thumb: img02,
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
    thumb: img03,
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
    thumb: img04,
  },
  {
    id: "05",
    type: "vue",
    desc:
      "Vue 사이트 입니다.\n" + "섹션을 컴포넌트단위로 나누어 작업하였습니다.",
    title: "Vue Site",
    github:
      "https://github.com/hellojoyworldz/webs/tree/master/myVUE/vue_site1",
    site: "https://myvue-joy.web.app/",
    thumb: img05,
  },
];
const SiteProject = ({ bgcolor }) => {
  return (
    <section className="mainFront" data-bgcolor={bgcolor}>
      <TitleType2 title={"Hello✋🏻\nMy SideProject"} />
      <ListType2 items={items} />
    </section>
  );
};

export default SiteProject;
