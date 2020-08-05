import React, {useEffect} from 'react';
import { getAllProducts} from "../../actions/products";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from './ProductItem.js';
import Filter from './Filter.js';
import './product.scss';

function Products (props) {

    const { productList } = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(()=>{
		console.log("get all products");
         dispatch(getAllProducts());
    }, []);



    return(	
        <>
            <Filter  />		
            <div className="product-container">
                {productList.length > 0 ?
                productList.map(product => 
                    <ProductItem key={product.id} product={product} />
                )
                :  <div className="no-results" >No results found.</div>
            }
            </div>
        </>
    )
}

export default Products;