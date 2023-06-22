import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state) => state.products.products)
    return (

        <div class="productWrapper">
           <div className='itemss'>
            <h1>products</h1>
           {
                products.map((product) => <Product product={product} key={product.id}></Product>)
            }
           </div>
            <ProductForm></ProductForm>
        </div>
    );
};

export default Products;