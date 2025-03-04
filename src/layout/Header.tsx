import Logo from "@/components/layout/Logo";
import NavMenu from "@/components/layout/NavMenu";
import "@/styles/layout/Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // 스크롤 위치에 따른 white 클래스 추가
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const headerStyle = {
    top: isScrolled && scrollDirection === "down" ? "-180px" : "0",
  };

  return (
    <header className={`chit-header ${isScrolled ? "chit-header-white" : ""}`} style={headerStyle}>
      {/* PC 헤더 */}
      <div className="chit-header-container pc-only">
        <nav className="chit-header-nav pc-only">
          <a href="/">
            <Logo />
          </a>
          <NavMenu />
        </nav>
      </div>
    </header>
  );
}
