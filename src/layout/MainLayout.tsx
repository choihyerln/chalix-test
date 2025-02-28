import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToTopBtn />
      <main>
        <Outlet />
      </main>
    </>
  );
}
