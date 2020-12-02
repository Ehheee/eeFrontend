import React, {useState, useEffect} from 'react';
import DataApi from '../data/DataApi';

const CheckoutBar = (props) => {
    const reset = async () => {
        var resp = await DataApi.reset();
        props.onReset();
    };
    return (
    <div className="checkoutBar">
        <button>Payment</button>
        <button onClick={props.onReset}>Reset</button>
    </div>)
}
export default CheckoutBar;