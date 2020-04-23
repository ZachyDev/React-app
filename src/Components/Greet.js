import React from 'react';
// create a greet functional component
const Greet = (props) => {
    const { fname,lname,children } = props;
    return (
        <div>
        <h1>Hello this is React!,from { fname } { lname }</h1>
        { children }
        </div>
    )
}
export default Greet;