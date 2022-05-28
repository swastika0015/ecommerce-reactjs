import './App.css';
import { Homepage } from './pages';
import { ProductList } from './pages';
import { ProductPage } from './pages';
import { Cart } from './pages';
import { Login } from './pages';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/productpage" element={<ProductPage/>} />
    </Routes>
  );
}

export default App;
