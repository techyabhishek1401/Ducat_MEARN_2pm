import React, { useContext } from 'react'
import { NameContext } from '../Context';
export default function Comp2() {
    const { nameChange } = useContext(NameContext);

    return (
        <div>
            <input placeholder="Enter your Name" onChange={(e) => nameChange(e.target.value)} />
        </div>
    )
}
