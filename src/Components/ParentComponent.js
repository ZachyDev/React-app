import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class PrantComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             GreetMessage: 'Parent'
        }
        this.GreetParent = this.GreetParent.bind(this);
    }
GreetParent(developer){
    alert(`Hello ${ this.state.GreetMessage } from ${ developer }`);
}
    render() {
        return (
            <div>
                <ChildComponent greetHandler = { this.GreetParent }/>
            </div>
        )
    }
}

export default PrantComponent
