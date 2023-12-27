import "./App.css";
import Layout from "./Layout";
import LoginTimer from "./components/LoginTimer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuController from "./components/MenuController";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MenuController />} />
          <Route path="/1" element={<MenuController />} />
          <Route path="/2" element={<LoginTimer />} />
        </Route>
        <Route path="/test" element={<LoginTimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
