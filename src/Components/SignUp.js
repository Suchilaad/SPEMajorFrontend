import React,{useState} from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import Alert from './Alert';

export default function SignUp() {
  const [loginData,setLoginData]=useState({});
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      });

    };

    const handleForm=(e)=>{
      if(loginData.password==loginData.confirmPassword){
      console.log(loginData);
      postDataToServer(loginData);
      e.preventDefault();
      }else{
        console.log("Error!!!!!")
      }
    }
    const [err,setErr]=useState("");
    const postDataToServer=(data)=>{
      axios.post(`${base_url}/customersave`,data).then(
        (response)=>{
            console.log(response.data)
            console.log("success!")
              {window.open("/login","_self");}
        },(error)=>{
            console.log(error)
            console.log("error!")
        }
      );
    }
    return (
    <>
        <form onSubmit={handleForm} className='text-center float-end animate__animated animate__pulse my-5 mx-4' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.80}}>
      <div className="mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="text"  onChange={(e)=>{setLoginData({...loginData,firstName:e.target.value})}} className="form-control shadow rounded" placeholder='Enter First Name' id="firstName" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="text" onChange={(e)=>{setLoginData({...loginData,lastName:e.target.value})}} className="form-control shadow rounded" placeholder='Enter Name' id="lastName" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input type="password" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}} className="form-control shadow rounded" placeholder='Enter Password' id="password"/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input type="password" onChange={(e)=>{setLoginData({...loginData,confirmPassword:e.target.value})}} className="form-control shadow rounded" placeholder='Re-enter Password' id="confirmPassword"/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="emailId" onChange={(e)=>{setLoginData({...loginData,emailId:e.target.value})}} className="form-control shadow rounded" placeholder='Enter Email ID' id="emailId" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <select id="role" onChange={(e)=>{setLoginData({...loginData,gender:e.target.value})}} className="form-control shadow rounded" aria-label="Default select example">
  <option defaultValue="Select role">Select role</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}} >Sign Up</button>
  <Alert alert={alert}/>
      </form>
      </>
  )
}
