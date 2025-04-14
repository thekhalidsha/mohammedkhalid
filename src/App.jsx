import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";
import TestPages from "./pages/TestPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/test" element={<TestPages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
