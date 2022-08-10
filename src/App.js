import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Cart, Homepage, Login, ProductList, ProductPage } from "./pages"

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productpage" element={<ProductPage />} />
        </Routes>
    )
}

export default App
