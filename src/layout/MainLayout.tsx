import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import ScrollToTopBtn from "@/components/shared/ScrollToTopBtn";
import Footer from "@/layout/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToTopBtn />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
