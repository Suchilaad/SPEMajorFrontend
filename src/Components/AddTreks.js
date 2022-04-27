import React,{useState} from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';

export default function AddTreks() {
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
  const postDataToServer=(data)=>{
      axios.post(`${base_url}/treksave`,data).then(
        (response)=>{
            console.log(response.data)
            console.log("success!")
            window.open("/viewTreks","_self");
        },(error)=>{
            console.log(error)
            console.log("error!")
        }
      );
  }
  return(
          <>
          <form onSubmit={handleForm} className='text-center rounded float-end animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
          <div className='mx-5 my-5'>
          <div className="mx-3 my-3 shadow">
    <input type="text" onChange={(e)=>{setLoginData({...loginData,trekName:e.target.value})}} placeholder="Enter trek name" className="form-control" id="trekName"/>
  </div>
  <div className="mx-3 my-3 shadow">
    <input type="text" onChange={(e)=>{setLoginData({...loginData,placeName:e.target.value})}} placeholder="Enter place name" className="form-control" id="placeName"/>
  </div>
  <div className="mx-3 my-3 shadow">
    <input type="number" onChange={(e)=>{setLoginData({...loginData,price:e.target.value})}} placeholder="Enter price" className="form-control" id="price"/>
  </div>
  <div className="mx-3 my-3 shadow">
  <input type="number" onChange={(e)=>{setLoginData({...loginData,gId:e.target.value})}} placeholder="Enter guide Id" className="form-control" id="gId"/>
  </div>
  <div className="mx-3 my-3 shadow">
  <input type="text" onChange={(e)=>{setLoginData({...loginData,imageId:e.target.value})}} placeholder="Enter Image name" className="form-control" id="imageId"/>
  </div>
  <button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Add Trek</button>
  </div>
          </form>
          </>
   
  )
}
