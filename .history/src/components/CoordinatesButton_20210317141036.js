// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component{
render() {
    return (
    <button onClick={this.props.onRecieveCoordinates}>
        "Click Me"
    </button>
    )
}

}

export default CoordinatesButton