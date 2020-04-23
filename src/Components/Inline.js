import React, { Component } from 'react'
import styles from './myStyles.module.css'


const heading = {
    fontSize: '40px',
    color: 'blue'
}
class Inline extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             head: 'Inline Styling'
        }
    }    
    render() {      
        return (
            <div>
                <h1 style = { heading }> { this.state.head }</h1>
            </div>
        )
    }
}

export default Inline
