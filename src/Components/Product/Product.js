import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { name, id, img, price } = props.product;
    const { handelAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info p-3'>
                <p className='product-name'>Name : {name}</p>
                <h6>Price : ${price}</h6>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text mt-3'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;