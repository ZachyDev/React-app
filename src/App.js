import React, { Component } from 'react';
import './App.css';
import Greet  from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Count from './Components/Count';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import ParentComponent from './Components/ParentComponent';
import UserGreet from './Components/UserGreet';
import UserProfile from './Components/UserProfile';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';


class App extends Component{
  render(){
    return(
      <div className = "App">
       {/*Greet component */}
        <Greet fname = "Zachy" lname = "Dev">
         <p>This is the children props</p>
        </Greet>

         {/*Welcome component */}
        <Welcome>
          <p>React uses Declarative paradigm</p>
        </Welcome>

        {/*Message  component*/}
        <Message />

        {/*Count  component*/}
        <Count />

        {/*FunctionClick  component*/}
        <FunctionClick />
        {/*ClassClick  component*/}
        <ClassClick />

        {/*Parent component*/}
        <ParentComponent />

        {/*userGreet component*/}
        <UserGreet />

        {/*userprofile component*/}
        <UserProfile />
        
        {/*Stylesheet component*/}
        <Stylesheet primary = { true }/>
        
        {/*Inline component*/}
        <Inline />

        {/*Form component*/}
        <Form />
         {/*LifeCycleMethods component*/}
         <LifecycleA />
         
      </div>
    )
  }
}
export default App