import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CartItem from './CartItem.js';

function Cart(props) {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/data/products.json`)
                    .then(res => {
                       console.log(res.data);
                       setProducts(res.data);

                    })


    }, [])

    return(
        <div>					
            <div className="container">
                {products.map(product => 
                    <CartItem key={product.id} product={product} />
                )}
            </div>
        </div>
    )
}

export default Cart;