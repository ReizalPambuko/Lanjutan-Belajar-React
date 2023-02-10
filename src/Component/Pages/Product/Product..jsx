import React, { Component } from "react";
import StateFullComponent from "./StateFullComponent/StateFullComponent";

class Product extends Component {
    state = {
        count: 0
    }


    handleCounter = (newValue) => {
        this.setState({
            count: newValue
        })
    }


    render(){
        return(
            <div>
                <h3>Rei_Shop</h3>
                <p>{this.state.count}</p>
                <StateFullComponent handleOnChange={(value) => this.handleCounter(value)} />
            </div>
        )
    }
}

export default Product;