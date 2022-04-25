import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import base_url from '../api/bootapi'

export default function GuideForm(){
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
    axios.post(`${base_url}/treksave`,data)
}
const getTreks=()=>{
    axios.get(`${base_url}/treks`).then(
        (response)=>{
            console.log(response.data)
            setTreks(response.data)
        },
        (error)=>{
            console.log(error)
        }
    )
}
const [treks,setTreks]=useState([]);
useEffect(()=>{
    getTreks();
},[]);
return(
        <>
        <form onSubmit={handleForm} className='rounded float-start shadow mx-5 my-5'>
        <div className="mx-3 my-3 shadow">
  <input type="text" onChange={(e)=>{setLoginData({...loginData,trekName:e.target.value})}} placeholder="Enter trek name" className="form-control" id="trekName"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="text" onChange={(e)=>{setLoginData({...loginData,placeName:e.target.value})}} placeholder="Enter place name" className="form-control" id="placeName"/>
</div>
<div className="mx-3 my-3 shadow">
  <input type="number" onChange={(e)=>{setLoginData({...loginData,price:e.target.value})}} placeholder="Enter contact" className="form-control" id="price"/>
</div>
<div className="mx-3">
<select id="gId" className="form-select" onChange={(e)=>{setLoginData({...loginData,gId:e.target.value})}} aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option>{treks.length>0?treks.map(item=>{
      item.trekName
  }):'No Treks'}
  </option>
</select>
</div>
<button type="submit" className="btn btn-outline-dark shadow mx-3 my-3">Submit</button>
        </form>
        </>
    )
}