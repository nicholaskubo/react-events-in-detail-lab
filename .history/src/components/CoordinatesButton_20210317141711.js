// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component{
    handleClick = (e) => {
        console.log(e.clientX, e.clientY)
    }
    
    
    render() {
        return (
        <button onClick={this.handleClick}>
        "Click Me"
        </button>
        )
    }
}

export default CoordinatesButton