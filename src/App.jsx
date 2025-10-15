import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllCryptids } from "./pages/AllCryptids";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cryptids" element={<AllCryptids />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
