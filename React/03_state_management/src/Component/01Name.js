import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props){
        super(props);
        this.state={
          name:"",
          age:""
        }
    }
    render() {
        return (
            <div>
                <input placeholder="Name" onChange={(event)=>{
                    console.log("event:",event.target.value);
                 //   this.state.name=event.target.value;
                this.setState({name:event.target.value});
                    }}/>

                    <input placeholder="age" onChange={(event)=>{
                    console.log("event:",event.target.value);
                 //   this.state.name=event.target.value;
                this.setState({age:event.target.value});
                    }}/>
            {/* input_ref.addeventListener('eventname',(event)=>{}) */}
                <h1>I'm ,<span style={{color:'white',backgroundColor:"red",borderRadius:"4px"}}> {this.state.name}</span>,<span style={{color:'white',backgroundColor:"red",borderRadius:"4px"}}>{this.state.age}</span>years old</h1>
            </div>
        )
    }
}
