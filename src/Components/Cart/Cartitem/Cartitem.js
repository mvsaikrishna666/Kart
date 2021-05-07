import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './CartitemStyle';
import {useDispatch} from 'react-redux'
import { commerce } from '../../../lib/Commerce';
import {setcartaction} from '../../../Redux/Actions/Actions'


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
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;