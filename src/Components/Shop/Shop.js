import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb, getStorCart } from '../../utilities/fakedb';
import './Shop.css'
import Cart from '../Cart/Cart';
import Answer from '../Answer/Answer';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

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
        setCart(savedCart);
    }, [products])

    const handelAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container '>

            <div className='products-container '>

                {
                    products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>)
                }
            </div>
            <div className='cart-container shadow'>
                <Cart cart={cart}></Cart>

            </div>
            <Answer></Answer>
        </div>
    );
};

export default Shop;