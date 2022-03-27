import React from 'react';
import './ShowProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const ShowProducts = ({ product }) => {
    const { img, name } = product;

    return (
        <div>
            <div className='show-products-container container mt-2'>
                <img src={img} alt="" />
                <p className='fw-bold'>{name}</p>
                <p className='ms-2'><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></p>
            </div>


        </div>
    );
};

export default ShowProducts;