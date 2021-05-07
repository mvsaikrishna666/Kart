import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Button, Typography} from '@material-ui/core'
import { commerce } from '../../lib/Commerce';
import './productpage.css'
import {useDispatch} from 'react-redux'
import {setcartaction} from '../../Redux/Actions/Actions'

const ProductPage = () => {
    const [product,setProduct]=useState()
    const { ProductId } = useParams();
    const dispatch=useDispatch();

    const handleAddToCart = async (productId, quantity) => {
        await commerce.cart.add(productId, quantity);
        dispatch(setcartaction(await commerce.cart.retrieve()))
      };

    useEffect(()=>{

        commerce.products.retrieve(ProductId).then((product) => setProduct(product));
    },[ProductId])
    if(product){
        return (
            <div className="productpage">
            <div className="productimage">
                <img alt="coverpage" className="imageitem" src={product.media.source}/>
            </div>
            <div className="description">
                <Typography variant="h3">{product.name}</Typography>
                <br/>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="caption" />

            </div>
            <div className="pricebox">
                <Typography variant="body1">Price:</Typography>
                <Typography variant="h2">{product.price.formatted_with_symbol}</Typography>
                <Button style={{backgroundColor:'rgba(0,179,0,0.1)'}}
                onClick={()=>handleAddToCart(product.id,1)}
                >Add to Cart</Button>
            </div>
        </div>
        )
    }
    else{
        return null;
    }
   

}

export default ProductPage

//product.name
//product.media.source
//product.price.formatted_with_symbol
//product.description