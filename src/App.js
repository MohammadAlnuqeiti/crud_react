// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./component/register";
import Header from './component/header';
import Login from './component/login';
import Home from './component/home';
import Todolist from './component/todolist';
import React from 'react';
import Api from './component/api';
import ListUser from './component/listUser';
import EditUser from './component/editUser';
import CreateUser from './component/createUser';
import ListPost from './component/listPost';
import CreatePost from './component/createPost';
import EditPost from './component/editPost';
import { Routes, Route , useParams} from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props)
    this.users = [

      {fullName:'ahmed',email:"ahmed@gmail.com",password:"12345678"},
      {fullName:'asad',email:"asad@gmail.com",password:"12345678"},
      {fullName:'abed',email:"abed@gmail.com",password:"12345678"},
  ]
  }
  render(){
    const Wrapper = (props) => {
      const params = useParams();
      return <Todolist flightData={this.users} updateFlight={this.users} {...{...props, match: {params}} } />
    }
    return (
    <div className="App">

      <Header/>
      <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register users={this.users} />} />
          <Route path="/login" element={<Login users={this.users} />} />
          <Route path="/api" element={<Api  />} />
          <Route path="/user" element={<ListUser  />} />
          <Route path="/user/create" element={<CreateUser  />} />
          <Route path="/user/:id/edit" element={<EditUser  />} />
          <Route path="/post" element={<ListPost  />} />
          <Route path="/post/create" element={<CreatePost  />} />
          <Route path="/post/:id/edit" element={<EditPost  />} />
          <Route path="/edit/:id" element={<Wrapper />} />

          <Route path="/todolist/:id?" element={<Todolist />} exact />
         
       </Routes>


    </div>
  );
  }
}  


export default App;
