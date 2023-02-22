import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser(){

    const navigate=useNavigate();

    const [inputs,setInputs]=useState({})


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:80/REACT/back_end_react/api/user.php/save",inputs)
        .then((respone)=>{
            // console.log(respone.data);
            navigate('/user');
        })


        // console.log(inputs);
      
    }
    
 
      

    return (
        <>
        <h1>Create user</h1>
        <div className='form-wrapper'>
                    <h2>create</h2>
                    <form onSubmit={handleSubmit} noValidate >

                        <div className='fullName'>
                        <label htmlFor="fullName">Full Name</label>
                        <input type='text' name='fullName' onChange={handleChange} noValidate />
                        </div>

                        <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' onChange={handleChange} noValidate />
                        </div>
                        <div className='email'>
                        <label htmlFor="email">phone</label>
                        <input type='text' name='phone' onChange={handleChange} noValidate />
                        </div>

                        <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' onChange={handleChange} noValidate />
                        </div>
                    

                        <div className='submit'>
                        <button>Create</button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default CreateUser