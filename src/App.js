import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Yes from "./pages/Yes";
import Gifts from "./pages/Gifts";
import Brunch from "./pages/Brunch";
import Dinner from "./pages/Dinner";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Yes />} />
          <Route path="/modal-demo" element={<Gifts />} />
          <Route path="/layout-demo" element={<Brunch />} />
          <Route path="/interaction-demo" element={<Dinner />} />
          <Route path="/complete" element={<ThankYou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
