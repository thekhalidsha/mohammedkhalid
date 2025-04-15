import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<HomePage />} />
            <Route path="portfolio" element={<Projects />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
