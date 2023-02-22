import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


import { Link, useNavigate } from "react-router-dom";


function ListPost(){

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        getUsers();

    },[]);
    const getUsers = () => {

        axios.get("http://localhost:80/REACT/back_end_react/api/post.php/")
        .then((respone)=>{
            setPosts(respone.data)
            console.log(respone.data);
        })
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/REACT/back_end_react/api/post.php/${id}/delete`).then((response)=>{
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
                    <th> Title </th>
                    <th> Content </th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>

                {posts.map((ele,index)=>{
                        return(
                <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.title}</td>
                    <td>{ele.content}</td>
                    <td>
                        <Link to={`/post/${ele.id}/edit`}>
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

export default ListPost