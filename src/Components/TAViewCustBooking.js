

import axios from 'axios';
import React from 'react';
import base_url from '../api/bootapi';
import UserService from '../service/UserService';

class TAViewCustBooking extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
      UserService.getCustBookings().then((response) => {
            this.setState({ users: response.data})
            console.log(response.data)
        });
    }

    render (){
        const setValueApprove=(user)=>{
            axios.put(`${base_url}/setapprove`,{id:user.id,pId:user.pId,emailID:user.emailID,countOfPpl:user.countOfPpl,contactNo:user.contactNo,address:user.address,approved:"accepted"}).then((response)=>{
                window.open("/guideHome","_self");
            })
        }
        const setValueDisapprove=(user)=>{
            axios.put(`${base_url}/setapprove`,{id:user.id,pId:user.pId,emailID:user.emailID,countOfPpl:user.countOfPpl,contactNo:user.contactNo,address:user.address,approved:"declined"}).then((response)=>{
                window.open("/guideHome","_self");
            })
        }
        return (<>
            <h1 className = "text-center" style={{color:"white"}}>Customer Bookings List</h1>
            <div className='mx-3 text-center'>
                <table className = "table table-dark" style={{opacity:0.9}}>
                    <thead>
                        <tr>
                            <td>Serial no</td>
                            <td>Place Id</td>
                            <td>Email Id</td>
                            <td>People count</td>
                            <td>Contact No</td>
                            <td>Address</td>
                            <td>Request</td>
                            <td></td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td>{user.id}</td>
                                     <td> {user.pId}</td>   
                                     <td> {user.emailID}</td>   
                                     <td> {user.countOfPpl}</td>   
                                     <td> {user.contactNo}</td>
                                     <td> {user.address}</td>
                                     <td> {user.approved}</td>
                                     <td> <button className='btn btn-primary shadow rounded mx-1' onClick={()=>{setValueApprove(user)}}>Accept</button>
                                    <button className='btn btn-primary shadow rounded mx-1' onClick={()=>{setValueDisapprove(user)}}>Decline</button></td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
            </>
        )
    }
}

export default TAViewCustBooking

