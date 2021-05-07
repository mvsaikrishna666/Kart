import React from 'react'
import Product from './Product/Product'
import './Products.css'

const Products = ({products, onAddToCart}) => {
    return (
            <div className='Listbox'>
            <div className='bookslist'>
                {products.map((product)=>(
                        <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
                ))}
            </div>
        </div>
    )
}

export default Products
