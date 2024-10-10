import { Routes, Route } from "react-router-dom";
// Layouts
import MainLayout from "@/shared/layouts/MainLayout";
// Views
import Home from "@/shared/views/Home";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
