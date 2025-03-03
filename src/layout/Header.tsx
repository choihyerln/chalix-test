import "@/styles/layout/Header.css";
import Logo from "@/components/layout/Logo";
import NavMenu from "@/components/layout/NavMenu";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Logo />
          <NavMenu />
        </nav>
      </div>
    </header>
  );
}
