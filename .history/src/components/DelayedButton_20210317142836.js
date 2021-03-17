import React from "react";

class DelayedButton extends React.Component {
    handleClick = () => {
        console.log(this.props)
    }

    render() {
        return (
            <button>Click Me 2</button>
        )
    }
}

export default DelayedButton