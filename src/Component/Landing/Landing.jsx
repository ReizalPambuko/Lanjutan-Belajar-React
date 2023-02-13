import React, { Component, Fragment } from "react";
import CrudApi from "../CrudApi/CrudApi";
import Product from "../Pages/Product/Product.";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

class Landing extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                        <Route path="/" Component={CrudApi} />
                        <Route path="/product" Component={Product} />
                </Fragment>
            
            </BrowserRouter>
        )
    }
}

export default Landing;