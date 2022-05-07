

import axios from 'axios';
import React from 'react';
import base_url from '../api/bootapi';
import UserService from '../service/UserService';

class ViewCustomerBookings extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
      UserService.getBookings().then((response) => {
            this.setState({ users: response.data})
            console.log(response.data)
        });
    }

    render (){
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

export default ViewCustomerBookings

