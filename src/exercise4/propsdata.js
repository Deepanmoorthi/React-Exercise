import React from 'react'

function Student(props) {
    
    return (
        <div style={{ backgroundColor: "rgb(4, 250, 189)", margin:3, color: 'black'}}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Student