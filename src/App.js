import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import CartDetail from './components/CartDetail';
import CartContextProvider from './context/CartContext';
import Checkout from './components/CheckoutForm';

function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<CartDetail />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </CartContextProvider>
    
  );
}

export default App;
