import React from 'react';

function CartItem (props) {
    return(				
            <div className="product">
                {props.product.id}
                {props.product.productName}
                {props.product.price}
                {props.product.color}
            </div>
    )
}

export default CartItem;