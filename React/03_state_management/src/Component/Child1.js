import React from 'react'

export default function Child({name}) {
    // console.log("props:",props)
    return (
        <div  style={{border:'2px solid red' ,padding:'20px'}}>
            Hi I'm {name}
        </div>
    )
}
