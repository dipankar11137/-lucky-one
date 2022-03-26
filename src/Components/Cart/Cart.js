import React, { useEffect, useState } from 'react';

const Cart = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1>i am cart</h1>

            <div className='row'>
                <div className="col-sm-9 bg-info">
                    <h1>i am hare {products.length}</h1>
                </div>
                <div className="col-sm-3 bg-success">
                    <h1>i am hare</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;