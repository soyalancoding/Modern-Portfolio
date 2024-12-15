import { Routes, Route } from "react-router-dom";
// Layouts
import MainLayout from "@/shared/layouts/MainLayout";
// Views
import Home from "@/shared/views/Home";
import About from "@/shared/views/About";
import Projects from "@/shared/views/Projects";
import NotFound from "@/shared/views/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
