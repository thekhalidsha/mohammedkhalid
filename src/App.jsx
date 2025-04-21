import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import SideBar from "./components/SideBar";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectDetailss from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<Projects />} />
            {/* <Route path="/portfolio/:id" element={<ProjectDetailss />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<SideBar />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
