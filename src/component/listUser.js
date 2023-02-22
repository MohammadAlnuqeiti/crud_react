import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


import { Link, useNavigate } from "react-router-dom";


function ListUser(){

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers();

    },[]);
    const getUsers = () => {

        axios.get("http://localhost:80/REACT/back_end_react/api/user.php/users")
        .then((respone)=>{
            setUsers(respone.data)
            console.log(respone.data);
        })
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/REACT/back_end_react/api/user.php/${id}/delete`).then((response)=>{
            console.log(response.data);
            getUsers();


        })
    }
    return (
        <>
        <h1>hello user</h1>
        <div className="container mt-5">
        <Table striped className="m-auto" style={{textAlign:"center"}}>
            <thead>
                <tr bg="primary">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>mobile</th>
                    <th>created at</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>

                {users.map((ele,index)=>{
            return(
                <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.created_at}</td>
                    <td>
                        <Link to={`/user/${ele.id}/edit`}>
                            <Button variant="primary">Edit</Button>
                        </Link>
                    </td>
                    <td>
                        <Link>
                            <Button variant="danger" onClick={()=>deleteUser(ele.id)}>Delete</Button>
                        </Link>
                    </td>
                </tr>
                )})}
            
            </tbody>
        </Table>
      </div>

        </>

    )
}

export default ListUser