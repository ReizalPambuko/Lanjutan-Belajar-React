import React, { Component } from "react";
import StateFullComponent from "./StateFullComponent/StateFullComponent";
import { connect } from "react-redux";

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
                <p>{this.props.count}</p>
                <StateFullComponent handleOnChange={(value) => this.handleCounter(value)} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        count: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);