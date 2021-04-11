import React from 'react'

export default function Child(props) {
    return (
        <div  style={{border:'2px solid green' ,padding:'20px'}}>
           I'm a {props.role}
        </div>
    )
}
