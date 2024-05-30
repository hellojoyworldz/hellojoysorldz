import "./Profile.style.scss";
import photo from "../../../../assets/images/IMG_0419.JPG";
const Profile = () => {
  return (
    <>
      <section className="mainProfile" data-bgcolor="#ff7896">
        <svg
          className="mainProfile__svg"
          width="1440"
          height="539"
          viewBox="0 0 1440 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-17.4829 15.9294C297.2 -24.1211 339.25 187.141 393.211 351.93C447.171 516.719 617.113 575.553 790.539 486.617C963.965 397.68 1095.42 189.366 1488.7 319.17"
            stroke="#FF7896"
            stroke-width="50"
            id="text-path"
          ></path>
          <text dy="1.5%" y="15px">
            <textPath
              xlinkHref="#text-path"
              fill="currentColor"
              startOffset="-197.5816"
            >
              HTML • CSS • jQuery • JavaScript • React • Vue • HTML • CSS •
              jQuery • JavaScript • React • Vue • HTML • CSS • jQuery •
              JavaScript • React • Vue • HTML • CSS • jQuery • JavaScript •
              React • Vue • HTML • CSS • jQuery • JavaScript • React • Vue •
              HTML • CSS • jQuery • JavaScript • React • Vue • HTML • CSS •
              jQuery • JavaScript • React • Vue • HTML • CSS • jQuery •
              JavaScript • React • Vue • HTML • CSS • jQuery • JavaScript •
              React • Vue • HTML • CSS • jQuery • JavaScript • React • Vue
              <animate
                attributeName="startOffset"
                begint="0"
                dur="20s"
                from="0"
                to="-1024"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
        <span className="mainProfile__thumb">
          <img src={photo} alt="" />
        </span>

        <footer className="footer" data-bgcolor="#ff7896">
          <h2 className="screenHide">CONTACT ME</h2>
          <address className="footer__info">
            <div className="footer__desc">
              "더 좋은 결과를 위해 계속 수정 중에 있습니다"
            </div>
            <ul className="list">
              <li className="list__item">
                <strong className="list__tit">NAME</strong>Gwak Sunah
              </li>
              <li className="list__item">
                <strong className="list__tit">E-mail</strong>
                <a href="toemail:hellojoyworldz@gmail.com">
                  hellojoyworldz@gmail.com
                </a>
              </li>
              <li className="list__item">
                <strong className="list__tit">Phone</strong>
                <a href="SMS:010-9783-6375">+82 10-9783-6375</a>
              </li>
              <li className="list__item">
                <strong className="list__tit">Portfolio</strong>
                <a href="https://hellojoyworldz.github.io/myPORTFOLIO/">
                  hellojoyworldz.github.io/myPORTFOLIO
                </a>
              </li>
              <li className="list__item">
                <strong className="list__tit">Git-Hub</strong>
                <a href="https://github.com/hellojoyworldz" target="_blank">
                  github.com/hellojoyworldz
                </a>
              </li>
              <li className="list__item">
                <strong className="list__tit">Blog</strong>
                <a href="https://hellojoyworldz.tistory.com/" target="_blank">
                  hellojoyworldz.tistory.com
                </a>
              </li>
            </ul>
          </address>
          <span className="footer__sbj">
            IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING ·
            IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING ·
            IMPOSSIBLE IS NOTING · IMPOSSIBLE IS NOTING ·
          </span>
        </footer>
      </section>
    </>
  );
};

export default Profile;
