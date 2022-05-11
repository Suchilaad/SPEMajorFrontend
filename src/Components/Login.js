import React,{useState} from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';
import Alert from './Alert';

export default function Login() {
const [loginData,setLoginData]=useState({});
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      });

    };

    const handleForm=(e)=>{
      sessionStorage.setItem('emailId',loginData.emailId);
      console.log(loginData);
      postDataToServer(loginData);
      e.preventDefault();
    }
    const [err,setErr]=useState("");
    const postDataToServer=(data)=>{
      
      if(data.role==="admin"){
        if(data.password=="root" && data.emailId=="admin@gmail.com"){
          window.open("/adminHome","_self");
        }else{
          setErr("Invalid Id/Password");
          showAlert("Invalid Id/Password","Success");
        }
      }
      else{
      console.log(`${base_url}/${data.role}/signin`)
      axios.post(`${base_url}/${data.role}/signin`,data).then(
        (response)=>{
            console.log(response.data)
            console.log("success!")
            if(response.data==="Username or Password don't match!"){
                setErr("Invalid Id/Password");
                showAlert("Invalid Id/Password","Success");
            }else if(data.role==="customer"){
              {window.open("/customerHome","_self");}
            }else if(data.role==="guide"){
              {window.open("/guideHome","_self");}
            }
        },(error)=>{
            console.log(error)
            console.log("error!")
        }
      );}
    }
    return (
      <>
      <form onSubmit={handleForm} className='text-center float-end animate__animated animate__pulse my-5 mx-4' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.80}} >
      <div className="mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input id="emailId" onChange={(e)=>{setLoginData({...loginData,emailId:e.target.value})}} type="text" placeholder='Enter Email Id' className="form-control shadow rounded" aria-describedby="emailHelp"/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}} type="password" className="form-control shadow rounded" placeholder='Enter Password' />
      </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <select id="role" onChange={(e)=>{setLoginData({...loginData,role:e.target.value})}} className="form-control shadow rounded" aria-label="Default select example">
  <option defaultValue="Select role">Select role</option>
  <option value="customer">Customer</option>
  <option value="guide">Guide</option>
  <option value="admin">Admin</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Login</button>
  <Alert alert={alert}></Alert> 
  </form>
          </>
    )
}
