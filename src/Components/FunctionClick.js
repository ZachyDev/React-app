import React from 'react'
function FunctionClick() {
    function alertMsg(){
        alert('Hello user')
    }
    return (
        <div>
            <button onClick = { alertMsg }>Click</button>
        </div>
    )
}
export default FunctionClick;