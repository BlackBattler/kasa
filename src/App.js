import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
