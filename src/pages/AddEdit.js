import React , {useEffect, useState} from 'react'
import  {useNavigate , useLocation,useParams} from "react-router-dom"
import './AddEdit.css'
import axios from 'axios'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState={
  name:"",
  email:"",
  contact:""
}

const AddEdit = ()=>{
  const [state,setState] = useState(initialState);
  const {name , email , contact} = state
  const navigate = useNavigate()

  const addUser = async (data) =>{
      const response = await axios.post("http://localhost:5000/users",data);
      if(response.status==200){
        toast.success(response.data);
      }
  }
  const {id} = useParams();

  useEffect(()=>{
    if(id){
      getSingleUser(id);
    }
  },[id])

  const getSingleUser = async (id)=>{
    const response  = await axios.get(`http://localhost:5000/users/${id}`)
    if(response.status===200){

      setState({...response.data})
    }
  }
  const updateUser = async (data,id)=>{
    const response  = await axios.patch(`http://localhost:5000/users/${id}`,data)
    if(response.status===200){
       toast.success(response.data);
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("Please Provide Value into each input field !")
    }
    else{
      if(!id){
      addUser(state);

    }
    else{
      updateUser(state,id)
    }
    }
    setTimeout(()=>navigate("/"),500)

  }

  const handleInputChange = (e) =>{

    let {name , value} = e.target;

    setState({...state , [name]:value})


  }

  return (
    <div style={{marginTop:"100px"}}>
    <form style={{
      margin:"auto"
    , padding:"15px"
    , maxWidth:"400px"
    ,alignContent:"center"
  }}
  onSubmit = {handleSubmit}
    >
    <label htmlFor="name">Name</label>
    <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter Name ..."
    onChange={handleInputChange}
    value={name}
    />
    <label htmlFor="email">Email</label>
    <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter email ..."
    onChange={handleInputChange}
    value={email}
    />
    <label htmlFor="contact">Contact</label>
    <input
    type="text"
    id="contact"
    name="contact"
    placeholder="Enter Contact ..."
    onChange={handleInputChange}
    value={contact}
    />
    <input
    type="submit"
    onChange={handleInputChange}
    value={id? "Update":"Add"}
    />




    </form>


    </div>
  )
}

export default AddEdit
