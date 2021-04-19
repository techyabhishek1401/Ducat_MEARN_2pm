import React,{useContext} from 'react'
import {NameContext} from '../Context';
import Comp3 from './Comp3'
export default function Comp1() {
    let {name}=useContext(NameContext);
   
    return (
        <div>
            Hi I'm {name}
            <Comp3 />
        </div>
    )
}
