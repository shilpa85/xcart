import React from 'react';
import {  addToCart} from "../../actions/products";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

function ProductItem (props) {

    const dispatch = useDispatch();
    const { cartCount } = useSelector(state => state.products);

    const StyledSpan = styled.span`
        background-color: ${props.product.colour.color};
        width: 12px;
        height: 12px;
        `;
   
    const addToCartHandler = (e) => {
        dispatch(addToCart(cartCount+1));
    }

    return(				
            <div className="product">
                <div className="product-image">
                    <img src={props.product.image} alt={props.product.title} />
                    {props.product.discount > 0 &&
                    <span className="product-discount"> {props.product.discount }% </span>
                    }
                </div>
                <div className="product-details">
                    <div className="product-left-column">
                        <h3 className="product-name">
                            {props.product.title.length > 25 ?
                            props.product.title.substr(0, 25).concat('...')
                            : props.product.title}
                            </h3>
                        <h3 className="product-brand">{props.product.brand}</h3>
                        <span className="product-price">Rs. {Number(props.product.price.final_price).toFixed(2)}</span>                  
                    </div>

                    <div className="product-right-column">
                        <StyledSpan />
                        <button className="button--primary" onClick={addToCartHandler} >Add To Cart</button>                 
                    </div>
                </div>
                
            </div>
    )
}

export default ProductItem;