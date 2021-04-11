import React, { Component } from 'react'
import {Container,Row,Col,Button,Spinner} from 'react-bootstrap';
import axios from 'axios';
import UserTable from '../Component/UserTable'
export default class Api extends Component {
    state={
        totalUsers:[],
        loading:true,
        currentPage:1,
        recordsPerPage:50,
        name:""
        
    }

   componentDidMount(){
    // fetch("https://randomuser.me/api/?results=50")
    // .then(res =>{       
    //   return  res.json()})
    // .then(
    //   (result) => {
    //       console.log("result:",result)
    //     this.setState({
    //       loading: false,
    //       totalUsers: result.results
    //     });
    //   },     
    //   (error) => {
    //       console.log("error:",error)
    //     this.setState({
    //         loading: false,
    //     });
    //   }
    // )
     axios.get('https://randomuser.me/api/?results=500')
     .then((res)=>{
         console.log("res:",res);
              this.setState({
             loading: false,
             totalUsers: res.data.results
        });
         
     }).catch((err)=>{
         console.log("err:",err)
     })

   }


   changePageNumber=(e)=>{
   console.log("pageNumber:",e.target.id);
   this.setState({currentPage:e.target.id})
   }
    render() {
       const {totalUsers,loading,currentPage,recordsPerPage}=this.state;
       // 1*50=>50,5*50=>250
       const lastIndex=currentPage * recordsPerPage;
       const firstIndex=lastIndex-recordsPerPage;      
       const userToDisplay=totalUsers.slice(firstIndex,lastIndex);
       //const totalPages=totalUsers/recordsPerPage;
       console.log("first:",firstIndex);
       console.log("last:",lastIndex)
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalUsers.length / recordsPerPage); i++) {
            pageNumbers.push(i);
         }
        console.log("pages:",pageNumbers)
        if(loading){
            return <div style={{width:'100vw',height:'100vh',background:"#5C5454"}} className="text-center ">
                    <Spinner animation="border" variant="primary" className="my-auto" />
            </div>
        }
        return (
            <Container>
                <Row >
                    <Col> <h6 className="text-danger text-center">Api Calling</h6></Col>
                </Row>
                <Row>
                    <Col>
                      <input placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})}/> 
                    </Col>
                    <Col>
                   <p>{this.state.name}</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                      <input placeholder="Records Per Page" type="number" value={this.state.recordsPerPage} onChange={(e)=>this.setState({recordsPerPage:e.target.value})}/> 
                    </Col>
                    <Col>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                       <UserTable user={userToDisplay} start={firstIndex}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    <ul>
                   <li className="bg-danger">{firstIndex}</li>
                    {pageNumbers.map(page=>{
                        return <li id={page} onClick={this.changePageNumber}>{page}</li>
                    })}
                     <li className="bg-danger">{lastIndex}</li>
                    </ul>
                    </Col>
                </Row>
               
            </Container>
        )
    }
}
