import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className = "Welcome">
                <strong>React is a Javascript library for building rich UI </strong>
                { children }
            </div>
        )
    }
}

export default Welcome;
