import { Routes, Route } from "react-router-dom";
// Layouts
import MainLayout from "@/shared/layouts/MainLayout";
// Views
import Home from "@/shared/views/Home";
import NotFound from "@/shared/views/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
