import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             gender: '',
             comment: '',
             topic: ''
        }
    }
HandleUsernameChange = (event) =>{
    this.setState({
        username: event.target.value
    })
}
HandleGenderChange = (event) =>{
    this.setState({
        gender: event.target.value
    })
}
HandleCommentChange = (event) =>{
    this.setState({
        comment: event.target.value
    })
}
HandleTopicChange = (event) =>{
    this.setState({
        topic: event.target.value
    })
}
HandleSubmit = (event) => {
    alert(`${ this.state.username } ${ this.state.gender} ${ this.state.comment } ${ this.state.topic }`)
    event.preventDefault();
}
    render() {
        const { username, gender, comment, topic } = this.props;
        return (
            <form onSubmit = { this.HandleSubmit }>
                 <div>
                    <label>Username</label>
                    <input type="text"   value = { username } onChange = { this.HandleUsernameChange } placeholder = "Username"/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text"   value = { gender } onChange = { this.HandleGenderChange } placeholder = "Gender" /> 
                 </div>
                 <div>
                    <label>Comments</label>
                    <textarea value = { comment  } onChange = { this.HandleCommentChange }/>
                 </div>
                 <div>
                    <label>Topic</label>
                    <select value = { topic } onChange = { this.HandleTopicChange }>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                 </div>
                 <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form
