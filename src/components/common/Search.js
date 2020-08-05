import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/products";

function Search (props) {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");

    const onChangeHandler = (e) =>{
       setTerm(e.target.value);
    }

    const searchHandler = (e) =>{
        e.preventDefault();
        if(term !== ''){
            dispatch(getAllProducts({title: term}))
        }       
    }
    

    return(
        <div>					
            <form onSubmit={searchHandler}>					
                <input 
                type="text" 
                value={term} 
                onChange={onChangeHandler} 
                placeholder="Search Products" 
                name="term" 
                aria-label="Search"
                />
            </form>
        </div>
    )
}

export default Search;