import './App.css';
import {React, useState, useEffect} from 'react'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar'
import {commerce} from './lib/Commerce'
function App() {
  const [products, setProducts]=useState([]);
  const [cart, setCart]=useState({});
  
  const fetchproducts= async ()=>{
    const {data} = await commerce.products.list();

    setProducts(data);
  }
  const fetchCart= async ()=>{
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }
  
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };


  useEffect(()=>{
    fetchproducts();
    fetchCart();
  },[]);

  console.log(cart)

  return (
    <div>
      <Navbar totalitems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
