import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'LifeCycleMethods'
        }
        console.log('LifecycycleA constructor');
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycycleA componentDidMount')
    }
    render() {
        console.log('LifecyclycleA method render')
        return (
            <div>
                <LifecycleB />
                <strong>Component Lifecycle MethodsA</strong>
            </div>
        )
    }
}

export default LifeCycleMethods
