import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    handleLogOut = () => {
        window.localStorage.removeItem('email');
        window.location.pathname = "/login";
    
      }
  render() {
    return (
      <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto" style={{display:"flex",justifyContent:"space-between"}}>
                  <div style={{display:"flex"}}>
                    <Nav.Link href="/home">Home</Nav.Link>
                   <Nav.Link href="/api">Api</Nav.Link>
                   <Nav.Link href="/user">User</Nav.Link>
                   <Nav.Link href="/user/create">User create</Nav.Link>
                   <Nav.Link href="/post">Posts</Nav.Link>
                   <Nav.Link href="/post/create">Post create</Nav.Link>
                   {/* <Nav.Link href="/user/:id/edit">User edit</Nav.Link> */}
                   <Nav.Link href="/todolist/1">To Do list</Nav.Link>

                  </div>
                  <div style={{display:"flex"}}>

                   { !window.localStorage.getItem('email')?<><Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link></>
                    :<Nav.Link onClick={this.handleLogOut}>logout</Nav.Link>}
                  </div>
                </Nav>
                </Container>
            </Navbar>

      </div>
    )
  }
}
export default Header
