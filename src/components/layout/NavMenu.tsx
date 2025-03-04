import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <ul className="wai-ul">
      <li className="wai-li">
        <div className="chit-header-nav-link">
          <Link className="header-nav-unit white active" to="/">
            who we are
          </Link>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">CAIT VALUE</a>
          </li>
          <li className="sub-li">
            <a className="sub-link">CEO 메시지</a>
          </li>
          <li className="sub-li">
            <a className="sub-link">연혁</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="chit-header-nav-link">
          <Link className="header-nav-unit white active" to="/">
            what we can
          </Link>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">컨설팅부</a>
          </li>
          <li className="sub-li">
            <a className="sub-link">글로벌연구센터</a>
          </li>
          <li className="sub-li">
            <a className="sub-link">정책연구부</a>
          </li>
          <li className="sub-li">
            <a className="sub-link">기술개발부</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="chit-header-nav-link">
          <Link className="header-nav-unit white active" to="/">
            what we do
          </Link>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">사업실적</a>
          </li>
          <li className="sub-li">
            <a aria-current="page" className="sub-link" href="/presentation?category=발표논문">
              발표논문
            </a>
          </li>
          <li className="sub-li">
            <a className="sub-link">NEWS</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="chit-header-nav-link">
          <Link className="header-nav-unit white active" to="/">
            contact
          </Link>
        </div>
      </li>
    </ul>
  );
}
