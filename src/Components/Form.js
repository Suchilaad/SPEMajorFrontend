import axios from 'axios';
import React,{useState} from 'react'
import base_url from '../api/bootapi'

export default function Form(){
const[loginData,setLoginData]=useState({});
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type,
    });
};
const handleForm=(e)=>{
    console.log(loginData);
    postDataToServer(loginData);
    e.preventDefault();
}
const[err,setErr]=useState("");
const postDataToServer=(data)=>{
    axios.post(`${base_url}/guidesave`,data)
}
    return(
        <>
        <form onSubmit={handleForm} className='rounded float-start shadow mx-5 my-5'>
        <div className="mx-3 my-3 shadow">
  <input type="text" onChange={(e)=>{setLoginData({...loginData,firstName:e.target.value})}} placeholder="Enter guide name" className="form-control" id="firstName"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="text" onChange={(e)=>{setLoginData({...loginData,lastName:e.target.value})}} placeholder="Enter guide name" className="form-control" id="lastName"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="password" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}} placeholder="Enter password" className="form-control" id="password"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="password" placeholder="Confirm password" className="form-control" id="formGroupExampleInput"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="inputAddress" onChange={(e)=>{setLoginData({...loginData,address:e.target.value})}} placeholder="Enter address" className="form-control" id="address"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="inputEmail4" onChange={(e)=>{setLoginData({...loginData,emailId:e.target.value})}} placeholder="Enter Email" className="form-control" id="emailId"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="number" onChange={(e)=>{setLoginData({...loginData,contactNo:e.target.value})}} placeholder="Enter contact" className="form-control" id="contactNo"/>
</div>
<button type="submit" className="btn btn-outline-dark shadow mx-3 my-3">Submit</button>
        </form>
        </>
    )
}