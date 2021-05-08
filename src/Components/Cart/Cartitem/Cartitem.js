import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './CartitemStyle';
import {useDispatch} from 'react-redux'
import { commerce } from '../../../lib/Commerce';
import {setcartaction} from '../../../Redux/Actions/Actions'
import './cartitem.css'

const CartItem = ({ item}) => {
  const classes = useStyles();
  const dispatch=useDispatch();

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    await commerce.cart.update(lineItemId, { quantity });
    dispatch(setcartaction(await commerce.cart.retrieve()))
    
  };

  const handleRemoveFromCart = async (lineItemId) => {
    await commerce.cart.remove(lineItemId);
    dispatch(setcartaction(await commerce.cart.retrieve()))
  };


  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <div className="not-image">      
        <CardContent className="Cardcontent">
          <div className="name-price">
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        </div>
        <Typography style={{paddingLeft:'30px'}} variant="h3">&nbsp;{item.quantity}&nbsp;</Typography>
      </CardContent>
      <CardActions className="cardactions">
          <Button style={{fontWeight:'bolder',backgroundColor:'rgba(247,25,0,0.1)',width:'25%'}} type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          
          <Button style={{backgroundColor:'rgba(0,179,0,0.1)',width:'25%'}} type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        
        <Button style={{backgroundColor:'rgba(247,25,0,0.1)',width:'50%'}}  type="button"  onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
      </div>

    </Card>
  );
};

export default CartItem;