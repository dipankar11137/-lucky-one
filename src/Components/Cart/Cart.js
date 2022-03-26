import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Cart.css'

const Cart = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div >
            <div className='row'>
                <div className=" col-sm-9 bg-info">
                    <div className='container'>
                        <div className=' products-container'>
                            {
                                products.map(product => <Products key={product.id} product={product}></Products>)
                            }

                        </div>
                    </div>
                </div>
                <div className="col-sm-3 bg-success">
                    <h1>i am hare</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;