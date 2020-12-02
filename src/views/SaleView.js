import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import DataApi from '../data/DataApi';
import CheckoutBar from './CheckoutBar';

const renewProductArray = (products, productId) => {
    products = JSON.parse(JSON.stringify(products));
    var p = products.find(product => product.id === productId);
    p.amount -=1;
    return products;
};
const SaleView = (props) => {
    const [products, setProducts] = useState([]);
    const [sale, setSale] = useState();
    const onProductClick = async (product, sale) => {
        console.log(product);
        console.log(sale);
        var sale = await DataApi.reserveProduct(product, 1);
        setProducts(renewProductArray(products, product.id));
        setSale(sale);
    };
    const reset = async () => {
        await DataApi.reset(sale);
        refreshProducts();
    };
    const refreshProducts = async () => {
        setProducts(await DataApi.getProducts());
    };
    useEffect(() => {
        refreshProducts();
    }, []);
    return(
        <div>
            <ProductList onProductClick={onProductClick} products={products || []}></ProductList>
            <CheckoutBar onReset={reset}></CheckoutBar>
        </div>
    );
}

export default SaleView;