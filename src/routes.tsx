import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
