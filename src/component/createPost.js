import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost(){

    const navigate=useNavigate();

    const [inputs,setInputs]=useState({})


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:80/REACT/back_end_react/api/post.php/save",inputs)
        .then((respone)=>{
            // console.log(respone.data);
            navigate('/post');
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
                        <label htmlFor="fullName">Name</label>
                        <input type='text' name='name' onChange={handleChange} noValidate />
                        </div>
                        <div className='fullName'>
                        <label htmlFor="fullName">Title</label>
                        <input type='text' name='title' onChange={handleChange} noValidate />
                        </div>
                        <div className='fullName'>
                        <label htmlFor="fullName">Content</label>
                        <input type='text' name='content' onChange={handleChange} noValidate />
                        </div>

                     


                        <div className='submit'>
                        <button>Create</button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default CreatePost