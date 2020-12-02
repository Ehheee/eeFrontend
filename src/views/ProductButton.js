import React, {useState, useEffect} from 'react';
import DataApi from '../data/DataApi';

const getProductFromSale = (sale, productId) => {
    return sale.saleProducts.find((saleProduct) => saleProduct.product.id === productId).product;
};
const ProductButton = (props) => {
    const [product, setProduct] = useState(props.product);
    const onProductClick = async (product) => {
        var resp = await DataApi.reserveProduct(product, 1);
        //var respProduct = getProductFromSale(resp, product.id);
        //setProduct(respProduct);
        props.onClick(props.product, resp);
    };
    return (
        <div className="product">
            <button disabled={props.product.amount < 1 } className="productButton" onClick={() => {props.onClick(props.product)}}>{props.product.name}</button>
            <div>Stock: {props.product.amount}</div>
        </div>
    );
};
export default ProductButton;