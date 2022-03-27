
import './Cart.css'
import { useState } from 'react';
import ShowProducts from '../ShowProduct/ShowProducts';

const Cart = (props) => {

    const products = props.cart;
    const [product, setProduct] = useState([]);

    if (products.length > 4) {
        alert('You can select only 4 item');

    }
    const handelChooseProduct = () => {
        const random = products[Math.floor(Math.random() * products.length)];
        setProduct([random]);
    }

    return (
        <div className='container mt-3'>
            <h1 className='select-product shadow'>Selected Products</h1>
            {
                products.map(product => <ShowProducts product={product}></ShowProducts>)

            }
            <h3 className='mt-3'><button>CHOOSE 1 FOR ME</button></h3>
            <h3><button onClick={handelChooseProduct}>CHOOSE AGAIN</button></h3>
        </div>
    );
};

export default Cart;