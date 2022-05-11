

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
        },(error)=>{console.log(error);console.log("Error!")});
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
                                <tr key = {user[0].id}>
                                     <td>{user[0].id}</td>
                                     <td> {user[0].pId}</td>   
                                     <td> {user[0].emailID}</td>   
                                     <td> {user[0].countOfPpl}</td>   
                                     <td> {user[0].contactNo}</td>
                                     <td> {user[1].address}</td>
                                     <td> {user[0].approved}</td>
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

