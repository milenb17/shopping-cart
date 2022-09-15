import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Nav from './Nav';
import Shop from './Shop';
import Cart from './Cart';
import items from './images/Images';
function App() {
  const [cart, setCart] = useState({});
  const [numCartItems, setNumCartItems] = useState(0);
  
  
  const handleAddToCart = function(e) {
    e.preventDefault();
    let count = parseInt(e.target.querySelector('input').value);
    if (e.target.id in cart) {
      setCart(cart => {
        let newQuantity = cart[e.target.id].quantity + count;
        return (
          {
            ...cart,
            [e.target.id]: {...items[e.target.id], quantity: newQuantity}
          })
      })
    }
    else {
      setCart(cart => {
        return (
          {
            ...cart,
            [e.target.id]: {...items[e.target.id], quantity: count}
          })
      });
    }
    setNumCartItems(numCartItems => numCartItems += count);
  }

  const handleRemoveCart = function(e) {
    let num = cart[e.target.id].quantity
    setNumCartItems(numCartItems => numCartItems -= num);
    setCart(cart => {
      let newCart = {...cart};
      delete newCart[e.target.id];
      return newCart
    });
    
  }
  return (
    <BrowserRouter baseName='/shopping-cart'>
      <Nav count={numCartItems}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop handleClick={handleAddToCart} items={items} />} />
        <Route path='/cart' element={<Cart cart={cart} handleRemoveCart={handleRemoveCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
