import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
    //     // ******if else approach
    //    if (this.state.isLoggedIn) {
    //        return <div> welcome user! </div>
    //    }else{
    //        return <div>welcome guest</div>  
    //    }

    //**variable approach */

    // let message;
    //  if ( this.state.isLoggedIn ) {
    //      message = <div>Welcome again user</div>
    //  } else {
    //      message = <div>Welcome guest</div>
    //  }
    //  return <div> { message }</div>

    // ** ternary operator approach
    return(
        this.state.isLoggedIn ? 
        <div>Welcome our user!</div> :
        <div>Welcome guest</div>
    )
    // **short circuit approach
    // return this.state.isLoggedIn && <div>Welcome user</div>


    }

}

export default UserGreet
