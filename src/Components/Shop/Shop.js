import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb, getStorCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStorCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setcart(savedCart);
    }, [products])

    return (
        <div className='shop-container '>

            <div className='products-container '>

                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>part 2</h2>
            </div>
        </div>
    );
};

export default Shop;