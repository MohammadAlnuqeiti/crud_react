import { useEffect , useState } from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";

function EditPost(){
    const navigate=useNavigate();
    const {id} =useParams();

    const [inputs,setInputs]=useState([])

    useEffect(()=>{
        getUser();

    },[]);
    
    const getUser = () => {

        axios.get(`http://localhost:80/REACT/back_end_react/api/post.php/${id}`)
        .then((respone)=>{
            setInputs(respone.data[0])
            console.log(respone.data[0]);
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        //
        console.log(inputs);
        //
        setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
console.log(inputs);
        axios.put(`http://localhost:80/REACT/back_end_react/api/post.php/${id}/edit`,inputs)
        .then((respone)=>{
            console.log(respone.data);
            navigate('/post');
        })


        
    }
    
    console.log(inputs);
    return (
        <>
        <h1>Edit user</h1>
        <div className='form-wrapper'>
                    <h2>update</h2>
                    <form onSubmit={handleSubmit}  >

                        <div className='fullName'>
                        <label htmlFor="fullName">Name</label>
                        <input type='text' value={inputs.name} name='name' onChange={handleChange}  />
                        </div>

                        <div className='fullName'>
                        <label htmlFor="fullName">Title</label>
                        <input type='text' value={inputs.title} name='title' onChange={handleChange}  />
                        </div>

                        <div className='fullName'>
                        <label htmlFor="fullName">Content</label>
                        <input type='text' value={inputs.content} name='content' onChange={handleChange}  />
                        </div>

                  
                 

                        <div className='submit'>
                        <button>Create</button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default EditPost