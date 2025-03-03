import LogoImg from "@/assets/images/Logo.png";

export default function Logo() {
  return (
    <div className="header-logo">
      <img src={LogoImg} alt="logoImg" className="header-logo-img" />
    </div>
  );
}
