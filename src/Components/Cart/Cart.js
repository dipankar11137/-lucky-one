

import ShowProducts from '../ShowProduct/ShowProducts';

const Cart = (props) => {

    const products = props.cart;
    if (products.length > 4) {
        alert('khala hobe na');

    }


    return (
        <div>
            <h1>Select Clothes</h1>
            {
                products.map(product => <ShowProducts product={product}></ShowProducts>)
            }
            <h3><button>CHOOSE 1 FOR ME</button></h3>
            <h3><button>CHOOSE AGAIN</button></h3>
        </div>
    );
};

export default Cart;