import React from 'react';

const ShowProducts = ({ product }) => {

    return (
        <div>
            <h1>name: {product.name}</h1>
        </div>
    );
};

export default ShowProducts;