import React, { Component } from "react";

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
                <button className="min" onClick={() => this.handleMin()}>-</button>
                <input type="text" value={this.state.count}/>
                <button className="plus" onClick={() => this.handlePlus()}>+</button>
            </div>
        )
    }
}

export default Counter;