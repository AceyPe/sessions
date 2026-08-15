import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import ProductsPage from "./pages/productsPage"
import AboutPage from "./pages/aboutPage"
import Login from "./pages/login"
import Product from "./pages/product"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
