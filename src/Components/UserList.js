import React, { Component } from 'react'

class UserList extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
               <h1>
                    I am { user.name }. I am { user.age } years old. I take { user.skill }.
               </h1> 
            </div>
        )
    }
}

export default UserList
