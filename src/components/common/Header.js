import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import Search from './Search.js';

export default function Header (props) {

  const { cartCount } = useSelector(state => state.products);
  const { loginResult } = useSelector(state => state.login);

  const logoutHandler = (e) => {
      localStorage.removeItem("userData");
  }
    return(				
        <header className="header">
          <div className="menu">
            <h1>sCart</h1> 
            <Search />
            <ul>
              <li className="menu-item flex-container">
                {loginResult.length > 0 ?
                  <><Link to="/cart" className="flex-container">
                    <i className="fa fa-user-o" style={{fontSize: "20px"}} aria-hidden="true"></i>
                      <span>Welcome {loginResult[0].fullName}</span>
                  </Link>
                  <div onClick={logoutHandler} className="logout">| Logout </div>
                  </>              
                     :<Link to="/login" className="flex-container">Login</Link>
                  }
              </li>
            
              <li className="menu-item ">
                  <Link to="/cart" className="flex-container">
                  <i className="fa fa-cart-arrow-down" style={{fontSize: "20px"}} aria-hidden="true"></i>
                  <span>{cartCount?cartCount: ''}</span>
                </Link>
              </li>
              
            </ul>
          </div>
        </header>
    )
}