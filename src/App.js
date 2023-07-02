import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./Styles/app.scss";
import { Toaster } from "react-hot-toast"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
