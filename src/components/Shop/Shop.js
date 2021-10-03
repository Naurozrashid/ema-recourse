import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import './Shop.css'

const Shop = () => {
   const [products,setProducts] = useState([]);
   useEffect(() => {
       fetch('./products.JSON')
           .then(res => res.json())
           .then(data => setProducts(data))
   },[])

    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>pducts</h3>
                {
                    products.map(product => <Product></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 className="center">Order Summary</h2>
                <h4 className="center">Items ordered:</h4>
            </div>
        </div>
    );
};

export default Shop;