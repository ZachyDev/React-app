import React, { Component } from 'react'

class ClassClick extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           message: 'Hello user!'
      }
      this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
      this.setState({
          message: 'Goodbye user!'
      })
  }
  
    render() {
        return (
            <div> 
                <strong> { this.state.message }</strong>
                <button onClick = { this.clickHandler }>Click me</button>
            </div>
        )
    }
}

export default ClassClick
