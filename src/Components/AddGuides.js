import React,{useState} from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';

export default function AddGuides() {
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
      window.open('/viewGuides',"_self");
  }
      return(
          <>
          <form onSubmit={handleForm} className='text-center rounded float-end animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
          <div className='mx-5 my-5'>
          <div className="mx-3 my-3 shadow">
    <input type="text" onChange={(e)=>{setLoginData({...loginData,firstName:e.target.value})}} placeholder="Enter guide first name" className="form-control" id="firstName"/>
  </div>
  <div className="mx-3 my-3 shadow">
    <input type="text" onChange={(e)=>{setLoginData({...loginData,lastName:e.target.value})}} placeholder="Enter guide last name" className="form-control" id="lastName"/>
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
  <button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Add Guide</button>
</div>          </form>
          </>
    )
}
