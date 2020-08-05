import React, {Suspense, lazy}from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './../components/common/Header.js';


const Login = lazy(()=>import('./../components/users/Login.js'))
const Cart = lazy(()=>import('./../components/cart/Index.js'))
const Products = lazy(()=>import('./../components/products/Index.js'))

class Layout extends React.Component{
 
  componentDidMount(){
   /* let userData = localStorage.getItem('userData');

    if (!userData) {
       this.props.history.push('/login');
        
     } */
 }

 render(){
     return(
         <>
        <Header />

         <div className="main">
                <Suspense fallback={<div>Loading...</div>}>
				    <Switch>
                      <Route exact path="/" component={Products} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/cart" component={Cart} />
                      <Route exact path="/products" component={Products} />
				    </Switch>               
                </Suspense>           
         </div>
                
         <footer className="footer">
                <p className="copyright">
                   © 2020 sCart.com. All rights reserved.
                </p>
        </footer>
        </>
     )
 }
}
export default Layout;