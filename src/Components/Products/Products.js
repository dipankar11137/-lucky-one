import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    console.log(product)
    const { name, picture, id } = product;
    return (

        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h6>Price: ${id}</h6>

            </div>
        </div>

    );
};

export default Products;