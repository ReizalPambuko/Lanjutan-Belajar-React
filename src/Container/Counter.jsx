import React, { Component } from "react";
import { connect } from "react-redux";


import ActionType from "../Redux/reducer/globalActionType";

class Counter extends Component{

      state = {
        count: 0
    }


    handleCounterChange = () => {
        this.props.handleOnChange(this.state.count)
    }


    handleMin = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            }, this.handleCounterChange)
        }
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        }, this.handleCounterChange)
    }
    

    


    render(){
        return(
            <div>
                <button className="min" onClick={() => this.props.handleMin()}>-</button>
                <input type="text" value={this.props.count}/>
                <button className="plus" onClick={() => this.props.hadlePlus()}>+</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        count: state.totalOrder
    }
}
const mapStateToDispatch = (dispatch) => {
    return{
        handleMin: () => dispatch({type: ActionType.ADD_MINUS}),
        hadlePlus: () => dispatch({type: ActionType.ADD_PLUS})
    }
}



export default connect(mapStateToProps,mapStateToDispatch)(Counter);