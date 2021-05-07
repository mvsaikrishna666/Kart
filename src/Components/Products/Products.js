import Product from './Product/Product'
import './Products.css'
import React, { useState, useEffect } from 'react';
import {commerce} from '../../lib/Commerce'

const Products = () => {

    const [products, setProducts] = useState([]);
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
        
      };
    useEffect(() =>{
        fetchProducts();

    },[])

   if(products){
    return (
        <div className='Listbox'>
        <div className='bookslist'>
            {products.map((product)=>(
                    <Product key={product.id} product={product}/>
            ))}
        </div>
    </div>
)
   }else{
       return <h1>Loading...</h1>
   }
    
}

export default Products
