import React, { Component } from 'react'

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'LifeCycleMethods'
        }
        console.log('LifecycycleB constructor');
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycycleB componentDidMount')
    }
    render() {
        console.log('LifecycycleB method render')
        return (
            <div>
                <strong>Component Lifecycle MethodsB</strong>
            </div>
        )
    }
}

export default LifeCycleMethods
