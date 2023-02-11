import React, { Component } from "react";
import Counter from "../../../../Container/Counter";

class StateFullComponent extends Component {
    render(){
        return(
            <div>
                <h4>Hamburger</h4>
                <p>20.000</p>
                <Counter handleOnChange={(value) => this.props.handleOnChange(value)}/>
            </div>
        )
    }

}


export default StateFullComponent;