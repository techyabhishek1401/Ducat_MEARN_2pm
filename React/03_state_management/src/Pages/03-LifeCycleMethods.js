import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state={
            loading:true,
            name:"",
            counter:0,
        }
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
    }

    componentDidMount(){
        console.log("componentDidMount");
        setTimeout(()=>{
            this.setState({loading:false,name:"Test"})
        },2000)
    }

    increaseCounter=()=>{
      //  console.log("increaseCounter");
        this.setState({counter:this.state.counter+1});
        setTimeout(()=>console.log("new counter:",this.state.counter),20)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.log("nextProps:",nextProps);
        console.log("nextState:",nextState);
       if(this.state.counter!==0 && this.state.counter===nextState.counter){
           return false
       }
       return true
    
//    if(this.state.loading){
//        return true
//    }
//    return false
}

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    sameCounter=()=>{
        this.setState({counter:this.state.counter})
    }
    render() {
        console.log("render")

        if(this.state.loading){
          return  <h1>Loading.....</h1>
        }
        return (
            <div>
               <h1>{this.state.name}</h1>
               <br />
               {this.state.counter} <br />
               <button onClick={this.increaseCounter}>Increase</button>
               <button onClick={this.sameCounter}>Same</button>
            </div>
        )
    }
}
