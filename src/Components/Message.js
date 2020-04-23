import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'React crash course'
        }
        this.Subscribe = this.Subscribe.bind(this)
    }
Subscribe(){
    this.setState({
        message: 'You have enrolled for the course'
    })
}
    
    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick = {  this.Subscribe }>Enroll course</button>
            </div>
        )
    }
}

export default Message;