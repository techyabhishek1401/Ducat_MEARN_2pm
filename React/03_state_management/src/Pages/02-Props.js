import React, { Component } from 'react'
import Child1 from '../Component/Child1';
import Child2 from '../Component/Child2';
import Child3 from '../Component/Child3';
import Child4 from '../Component/Child4';


export default class Parent extends Component {
    state={
        name:"Abhishek"
    }
    render() {
        return (
            <div style={{border:'2px solid black' ,padding:'100px'}}>
                Parent
                <Child1 name="Test"  />
                <Child2 role="Software enineer" />
                <Child1 name="Test2"  />
                <Child2 role="react Developer" />
                {/* <Child3 />
                <Child4 /> */}
            </div>
        )
    }
}
