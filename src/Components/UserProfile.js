import React, { Component } from 'react';
import UserList from './UserList';

class UserProfile extends Component {
    render() {
        // const Users = [ 'moseti','zachy','doroh'];
        const UserProfile = [
            {
                name: 'Zachy',
                'age': 21,
                'skill': 'react'
            },
            {
                name: 'Doroh',
                'age': 20,
                'skill': 'angular'
            },
            {
                name: 'Rodgers',
                'age': 19,
                'skill': 'vue'
            }
        ]
        const UserProfileList = UserProfile.map((user,index) => <UserList  key = { index }  user = { user }/>)
        return <div>{UserProfileList}</div>
    }
}

export default UserProfile
