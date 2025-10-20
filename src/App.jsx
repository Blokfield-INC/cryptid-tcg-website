import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllCryptids } from "./pages/AllCryptids";
import { Cryptids } from "./pages/Cryptids";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-cryptids" element={<AllCryptids />} />
        <Route path="/cryptids" element={<Cryptids />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
