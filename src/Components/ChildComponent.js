import React from 'react'

function ChildComponent(props) {
    const { greetHandler } = props;
    return (
        <div>
            <button onClick = { () =>  greetHandler('zachy') }>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
