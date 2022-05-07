

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
        return (
            <div>
              <p style={{color:"white"}}>{sessionStorage.getItem("emailId")}</p>
                <h1 className = "text-center" style={{color:"white"}}>Customer Bookings List</h1>
                <table className = "table table-dark" style={{opacity:0.55}}>
                    <thead>
                        <tr>

                            <td>Place Id</td>
                            <td>Email Id</td>
                            <td>People count</td>
                            <td>Contact No</td>
                            <td>Address</td>
                            <td>Approved</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.pId}</td>   
                                     <td> {user.emailID}</td>   
                                     <td> {user.countOfPpl}</td>   
                                     <td> {user.contactNo}</td>
                                     <td> {user.address}</td>
                                     <td> {user.approved}</td>
                                     <td> <button className='btn btn-primary shadow rounded'>Approve</button></td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default TAViewCustBooking

