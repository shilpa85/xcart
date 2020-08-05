import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./layouts/Index.js";


const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/products" component={Layout} />
            <Route exact path="/login" component={Layout} />
            <Route exact path="/cart" component={Layout} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;