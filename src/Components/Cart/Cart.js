import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import CartItem from './Cartitem/Cartitem';
import useStyles from './CartStyle';
import {commerce} from '../../lib/Commerce'
import {setcartaction} from '../../Redux/Actions/Actions'
const Cart = ({onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const reduxcart=useSelector((state)=>state.cart.cart)
  
  const EmptyCart=async ()=>{
    await commerce.cart.empty()
    dispatch(setcartaction(commerce.cart.retrieve()))
  }
  
  const renderEmptyCart = () => (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
    </Container>
  );

  if (!reduxcart.line_items) return renderEmptyCart()

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {reduxcart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {reduxcart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>EmptyCart()}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  if(reduxcart.line_items.length){
    return (
      <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {renderCart()}
      </Container>
    )
  }
  else{
    return renderEmptyCart()
  }
 
};

export default Cart;