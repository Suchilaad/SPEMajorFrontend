

import React from 'react';
import UserService from '../service/UserService';

class ViewGuides extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Guides List</h1>
                <table className = "table table-dark" style={{opacity:0.55}}>
                    <thead>
                        <tr>

                            <td> Guide Id</td>
                            <td> Guide First Name</td>
                            <td> Guide Last Name</td>
                            <td> Guide Email Id</td>
                            <td> Guide Contact No</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.gId}>
                                     <td> {user.gId}</td>   
                                     <td> {user.firstName}</td>   
                                     <td> {user.lastName}</td>   
                                     <td> {user.emailId}</td>
                                     <td> {user.contactNo}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default ViewGuides

