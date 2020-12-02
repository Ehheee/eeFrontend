import React, {useState, useEffect} from 'react';
import ProductButton from './ProductButton';

const ProductList = (props) => {
    const createProductList = (products) => {
        return products.map(product => {
            return (<ProductButton key={JSON.stringify(product)} product={product} onClick={props.onProductClick}></ProductButton>);
        });
    };
    return (
    <div className="productList">
        {createProductList(props.products)}
    </div>)
}
export default ProductList;