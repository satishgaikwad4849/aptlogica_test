import {useState,useEffect}from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList";
import ProductDetailsPage from "./components/productsDetailsPage";

function App() {
  const [productData,setProductData]=useState(null)
  useEffect(()=>{
    fetch('/product.json')
    .then((response) => response.json())
    .then((result)=> {
     setProductData(result)
    })
  },[])
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList productData={productData} />} />
            <Route path="/productDetailsPage" element={<ProductDetailsPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
