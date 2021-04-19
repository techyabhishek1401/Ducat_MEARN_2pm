import React from 'react'

export default function Square({ num, id, onBtnClicked }) {
    return (
        <button class="btn btn-light btn-block square" onClick={() => onBtnClicked(id)}>{num}</button>
    )
}
