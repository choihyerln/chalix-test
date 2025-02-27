import "@/styles/Header.css";
import Logo from "@/layout/components/Logo";
import NavMenu from "@/layout/components/NavMenu";

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
