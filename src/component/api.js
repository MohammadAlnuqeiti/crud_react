import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import axios from "axios";

export default class Api extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res.data);
            this.setState({
                users:res.data

            })
        })
    }

  render() {
    return (
      <div className="container mt-5">
        <Table striped className="m-auto" style={{textAlign:"center"}}>
            <thead>
                <tr bg="primary">
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>

                {this.state.users.map((ele,index)=>{
                        return(
                <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>{ele.address.city}</td>
                </tr>
                )})}
            
            </tbody>
        </Table>
      </div>
    )
  }
}
