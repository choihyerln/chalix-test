import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import PresentationPage from "@/pages/board/PresentationPage";
import PresentationCreatePage from "@/pages/board/PresentationCreatePage";
import PresentationDetailPage from "@/pages/board/PresentationDetailPage";
import PresentationEditPage from "@/pages/board/PresentationEditPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/presentation/:id" element={<PresentationDetailPage />} />
          <Route path="/presentation/create" element={<PresentationCreatePage />} />
          <Route path="/presentation/:id/edit" element={<PresentationEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
