import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectBrands, selectColors, selectMinDiscount, selectMaxDiscount, selectMinPrice, selectMaxPrice, resetFilters } from "../../actions/products";
import axios from 'axios';


function Filter (props) {

    const dispatch = useDispatch();

    const [minPrice, setMinPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState([]);

    const [colours, setColours] = useState([]);
    const [brands, setBrands] = useState([]);
    const [discounts, setDiscounts] = useState([]);

    const { productList, 
        selectedColors, 
        selectedBrands, 
        minSelectedDiscount, 
        maxSelectedDiscount,
        minSelectedPrice,
        maxSelectedPrice  } = useSelector(state => state.products);

    useEffect(()=>{
        const _colours = {};
        const _brands = [];
        const _disounts = [];
        productList.forEach((element) => {
            _brands.push(element.brand);
            _colours[element.colour.color] = element.colour.title;
        });

        setBrands([...new Set(_brands)]);
        setColours(Object.entries(_colours));
        
        //Min and Max discounts
        for(let i= 10; i < 90; i+=10){
            _disounts.push(i);
        }
        setDiscounts(_disounts);

    }, [productList]);


    useEffect(()=>{
        axios.get('https://xebiascart.herokuapp.com/filters')
                    .then(res => {
                       if(res.data.length && res.data[2]){
                            const _minPrice =  res.data[2].values.filter(item=> item.key !== 'Max');
                            const _maxPrice =  res.data[2].values.filter(item=> item.key !== 'Min');
                            setMinPrice(_minPrice);
                            setMaxPrice(_maxPrice);
                       }
                     })

    }, []);


   const onChangeBrand = (brandName) => event => {

        const _selectedBrands = selectedBrands;
        const index = _selectedBrands.indexOf(brandName);
        if(index === -1){  
            _selectedBrands.push(brandName); 
        } else {
            _selectedBrands.splice( index, 1 );
        }

        dispatch(selectBrands([...new Set(_selectedBrands)]));

    }

    const onChangeColor = (color) => event => {

        const _selectedColors = selectedColors;
        const index = _selectedColors.indexOf(color);
        if(index === -1){  
            _selectedColors.push(color); 
        } else {
            _selectedColors.splice( index, 1 );
        }
        
        dispatch(selectColors([...new Set(_selectedColors)]));
    }


    const onChangeDiscount = (range) => event => {
        console.log(range, event.target.value)
        if(range === 'min' && !isNaN(event.target.value) ){
            dispatch(selectMinDiscount(event.target.value));
        }
        if(range === 'max' && !isNaN(event.target.value) ){
            dispatch(selectMaxDiscount(event.target.value));
        }
        
    }

    const onChangePrice = (range) => event => {
        console.log(range, event.target.value)
        if(range === 'min' && !isNaN(event.target.value) ){
            dispatch(selectMinPrice(event.target.value));
        }
        if(range === 'max' && !isNaN(event.target.value) ){
            dispatch(selectMaxPrice(event.target.value));
        }

    }


    const resetHandler = event => {
		 dispatch(resetFilters());
        /*dispatch(selectBrands([]));
        dispatch(selectColors([]));
        dispatch(selectMinDiscount(0));
        dispatch(selectMaxDiscount(0));
        dispatch(selectMinPrice(0));
        dispatch(selectMaxPrice(0)); */

    }
    
    
    
    return(
        <div className="filters-container">	
             <div className="filters-header"><h3>Filters</h3> <button onClick={resetHandler} className="reset-button">Reset </button></div>				
             <form>					
                <div className="filters-item"><h4>Colour</h4>
                    <ul>
                        {colours &&
                            colours.map(([key, value]) =>
                                <li key={key}>
                                    <label>                                      
                                        <input 
                                            type="checkbox" 
                                            value={key}
                                            onChange={onChangeColor(value)}  
                                            checked={selectedColors && selectedColors.indexOf(value) !== -1?true:false}
                                       />
                                        <span>{value}</span>
                                    </label>
                                </li>
                            )
                        }
                    </ul> 
                    </div>

                    <div className="filters-item"><h4>Brand</h4>
                        <ul>
                            {brands &&
                                brands.map((brand) =>
                                    <li key={brand}>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value={brand}
                                                onChange={onChangeBrand(brand)} 
                                                checked={selectedBrands && selectedBrands.indexOf(brand) !== -1?true:false}
                                            />
                                            <span>{brand}</span>
                                        </label>
                                    </li>
                                )
                            }
                        </ul> 
                    </div>

                    <div className="filters-item">
                         <h4>Price</h4>
                        <div className="dropldown-filters">
                            <select 
							name="min_price" 
							aria-label="minimum price" 
							onChange={onChangePrice('min')}
							value={minSelectedPrice}
							>
                                {minPrice.map(item =>                                 
                                        <option 
                                        value={item.key}  
                                        key={`min-${item.key}`} 
                                        onChange={(e)=>onChangePrice('min')}
                                        >
                                            {item.displayValue}
                                        </option>
                                           
                                    )
                                }
                            </select>
                            <select 
							name="max_price" 
							aria-label="maximum price"  
							onChange={onChangePrice('max')}
							value={maxSelectedPrice ? maxSelectedPrice : 'Max' }
							>
                                <option value="Max" key="max">Max</option>
                                {maxPrice.map(item =>
                                        <option 
                                        value={item.key}  
                                        key={`min-${item.key}`} 
                                        
                                        >
                                            {item.displayValue}
                                        </option>
                                    )
                                }

                            </select>
                        </div>
                    </div>

                    <div className="filters-item dropldown-filters">
                       <h4>Discount</h4>
                            <div className="dropldown-filters">
                                <select 
								name="min_discount" 
								aria-label="minimum discount"  
								onChange={onChangeDiscount('min')}
								value={minSelectedDiscount ? minSelectedDiscount : 0 }
								>
                                    <option value="0" key="min">Min</option>
                                    {discounts.map(item =>
                                            <option 
                                            value={item} 
                                            key={`min-${item}`} 
                                            
                                            >
                                               {item}%
                                            </option>

                                        )
                                    }
                                </select>
                                <select 
									name="max_discount" 
									aria-label="maximum discount"  
									onChange={onChangeDiscount('max')}
									 value={maxSelectedDiscount}
								>
                                    <option value={discounts[discounts.length-1]} key="max">Max</option>
                                    {discounts.map(item =>
                                            <option 
                                            value={item} 
                                            key={`min-${item}`} 
                                            onChange={onChangeDiscount('max')}
                                            >
                                               {item}%
                                            </option>
                                        )
                                    }
                                </select>
                            </div>
                    </div>
            </form>
        </div>
    )
}

export default Filter;