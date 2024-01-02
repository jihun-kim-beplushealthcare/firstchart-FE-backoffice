import GNBLayout from "./layout/GNBLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginTimer from "@components/LoginTimer";
import Join from "@components/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GNBLayout />}>
          <Route path="/3" element={<div>3</div>} />
          <Route path="/1" element={<div>1</div>} />
          <Route path="/2" element={<LoginTimer />} />
        </Route>
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
