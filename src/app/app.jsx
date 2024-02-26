import { Routes, Route } from "react-router-dom";
import Main from "./main/main";
import Product from "./product/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
