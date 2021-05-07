import React from 'react'
import {Card, CardActions, CardMedia, CardContent, Typography,Button} from '@material-ui/core'
import useStyles from './ProductStyles'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Product = ({product, onAddToCart}) => {
    const classes=useStyles();
    return (
        <div>
           <Card className={classes.card}>
           <Link style={{textDecoration:"none"}} to={`/product/${product.id}`}><CardMedia className={classes.cardimage} image={product.media.source} title={product.name}/>
                <CardContent className={classes.CardContent}>
                    
                        <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            {product.price.formatted_with_symbol}
                        </Typography>
            
                
                </CardContent></Link>
                <CardActions disableSpacing className={classes.cardActions}>
                <Button style={{backgroundColor:'rgba(0,179,0,0.1)'}} size="small" onClick={()=>onAddToCart(product.id,1)}><ShoppingCartIcon/></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
