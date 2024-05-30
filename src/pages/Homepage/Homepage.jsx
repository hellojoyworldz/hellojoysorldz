import Visual from "./components/Visual/Visual";
import Intro from "./components/Intro/Intro";
import SiteProject from "./components/SiteProject/SiteProject";
import SitePublishing from "./components/SitePublishing/SitePublishing";
import Banner from "./components/Banner/Banner";
import SiteCss from "./components/SiteCss/SiteCss";
import SiteJavaScript from "./components/SiteJavaScript/SiteJavaScript";
import Profile from "./components/Profile/Profile";

const Homepage = () => {
  return (
    <div id="contents">
      <main className="main">
        <Visual />
        <Intro />
        <SiteProject />
        <SitePublishing />
        <Banner />
        <SiteCss />
        <SiteJavaScript />
        <Profile />
      </main>
    </div>
  );
};

export default Homepage;
