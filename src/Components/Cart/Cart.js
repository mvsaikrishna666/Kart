import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import CartItem from './Cartitem/Cartitem';
import useStyles from './CartStyle';
import {commerce} from '../../lib/Commerce'
import {setcartaction} from '../../Redux/Actions/Actions'
import './Cart.css'

const Cart = ({onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart.cart)
  
  const EmptyCart=async ()=>{
    await commerce.cart.empty()
    dispatch(setcartaction(commerce.cart.retrieve()))
  }
  
  const renderEmptyCart = () => (
    <div className="emptycart">
      
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
    </div>
  );

  if (!cart.line_items) return renderEmptyCart()

  const renderCart = () => (
    <div className="Cartbox">
      <div className="Cartlist">
        {cart.line_items.map((lineItem) => (
          
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />

        ))}
      </div>
      <div className="Carttotal">
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button style={{backgroundColor:'rgba(0,179,0,0.1)'}} className={classes.emptyButton} size="large" type="button"  onClick={()=>EmptyCart()}>Empty cart</Button>
          <Button style={{backgroundColor:'rgba(24,11,67,0.1)'}} className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" >Checkout</Button>
        </div>
      </div>
    </div>
  );

  if(cart.line_items.length){
    return (
      <div className="cartpage">
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {renderCart()}
      </div>
    )
  }
  else{
    return renderEmptyCart()
  }
 
};

export default Cart;