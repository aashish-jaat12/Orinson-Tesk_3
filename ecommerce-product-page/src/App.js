import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<ProductPage />} />
        {/* Add more routes for other product pages */}
      </Routes>
    </Router>
  );
}

export default App;
