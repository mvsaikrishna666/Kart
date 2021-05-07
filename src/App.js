import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import {useDispatch} from 'react-redux'
import { commerce } from './lib/Commerce';
import ProductPage from './Components/ProductPage/ProductPage'
import {setcartaction} from './Redux/Actions/Actions'
const App = () => {
  const dispatch=useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  

  const refreshCart = async () => {
    //const newCart = await commerce.cart.refresh();

    dispatch(setcartaction(await commerce.cart.refresh()))
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar  handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          {/* <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */}
          <Route path="/product/:ProductId">
            <ProductPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;