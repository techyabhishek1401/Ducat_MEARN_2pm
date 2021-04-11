import React, { Component } from 'react'
import Table from '../Component/Table'
export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            department:"",
            id:0,
            users:[],
            toUpdate:false,
            tmp:{}
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange=function(event){
        console.log("event:",event.target.name);
        // debugger;
        this.setState({[event.target.name]:event.target.value});
        setTimeout(()=> console.log("state:",this.state),10)
    }
    // handleNameChange=function(e){
    //     console.log("this:",this);   
    //   this.setState({name:e.target.value})
    // }

    // handleAgeChange=function(e){
    //        this.setState({age:e.target.value});
    //       setTimeout(()=> console.log("state:",this.state),10)
    // }

    // handleDepartmentChange=(e)=>{
    //     this.setState({department:e.target.value});
    //     setTimeout(()=> console.log("state:",this.state),10)
    // }

    handleSubmit=(e)=>{
        let previous_users=[...this.state.users];
        let tmp={name:this.state.name,age:this.state.age,department:this.state.department,id:this.state.id+1}
        previous_users.push(tmp);
        console.log("New Users:",previous_users)
        // this.setState({users:[...this.state.users,tmp]});
        this.setState({users:previous_users,name:"",age:"",department:'',id:this.state.id+1})
        setTimeout(()=> console.log("state:",this.state),10)
    }

    handleEdit=(user)=>{
        console.log("called from props")
        this.setState({name:user.name,age:user.age,department:user.department,toUpdate:true,tmp:user})
    }
    handleUpdate=()=>{
      let userToUpdate=this.state.users.find((u)=>u.id===this.state.tmp.id);
      let userIndex=this.state.users.indexOf(userToUpdate);
      console.log(userIndex)
  let previous_users=[...this.state.users];
  previous_users[userIndex]={...userToUpdate,name:this.state.name,age:this.state.age,department:this.state.department}
this.setState({users:previous_users,toUpdate:false,name:"",age:"",department:""}) 
}

 handleDelete=(user)=>{
     console.log("user to delete:",user);
     const tmp_user=[...this.state.users];
     const index=tmp_user.indexOf(user);
     console.log("index:",index);
     tmp_user.splice(index,1);
     console.log("new user list:",tmp_user);
     this.setState({users:tmp_user})
 }

    render() {
        const {name,age,department,users,toUpdate}=this.state;

        //name--> this.state.name
        return (
            <div>
                
              <input placeholder="Name" name="name" value={name}  onChange={this.handleChange}/> <br />
              <input placeholder="Age" type="number" value={age} name="age" onChange={this.handleChange}/> <br />
              <input placeholder="Department" value={department} name="department"  onChange={this.handleChange}/> <br />
       
       {toUpdate ?  <button onClick={this.handleUpdate}>Update User</button>: <button onClick={this.handleSubmit}>Add User</button>}

{/* 
condition rendering
 1)  if we have to decide between 2 components- ternary opertaor
2)  if we have only one component and we decide wheter to show it or not depending on some condition--And
*/}


     { users.length > 0 &&
            <Table users={users} onEdit={this.handleEdit} onDelete={this.handleDelete}/>  }
            </div>
        )
    }
}
