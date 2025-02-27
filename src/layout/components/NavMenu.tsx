export default function NavMenu() {
  return (
    <ul className="wai-ul">
      <li className="wai-li">
        <div className="header-nav-link">
          <a className="header-nav-unit" href="/">
            who we are
          </a>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">CAIT VALUE</a>
            <a className="sub-link">CEO 메시지</a>
            <a className="sub-link">연혁</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="header-nav-link">
          <a className="header-nav-unit" href="/">
            what we can
          </a>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">컨설팅부</a>
            <a className="sub-link">글로벌연구센터</a>
            <a className="sub-link">정책연구부</a>
            <a className="sub-link">기술개발부</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="header-nav-link">
          <a className="header-nav-unit" href="/">
            what we do
          </a>
        </div>
        <ul className="sub-lists">
          <li className="sub-li">
            <a className="sub-link">사업실적</a>
            <a className="sub-link">발표논문</a>
            <a className="sub-link">NEWS</a>
          </li>
        </ul>
      </li>
      <li className="wai-li">
        <div className="header-nav-link">
          <a className="header-nav-unit" href="/">
            contact
          </a>
        </div>
        <ul className="sub-lists"></ul>
      </li>
    </ul>
  );
}
