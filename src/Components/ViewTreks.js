import 'animate.css';

import React from 'react';
import UserService from '../service/UserService';

class ViewTreks extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            treks:[]
        }
    }

    componentDidMount(){
        UserService.getTreks().then((response) => {
            this.setState({ treks: response.data})
        });
    }

    render (){
        return (
            <div>
                <div className="row my-3 mx-3">
                                
                        {
                            this.state.treks.map(
                                trek => 
                                <div className="col-sm-4 text-center my-2" >
                                  <div className="card my-2 mx-2 shadow float-start animate__animated animate__backInUp" style={{borderRadius:"20px",width:"100%",height:"100%",opacity:0.50}}>
                                    <div className="card-body">
                                    <img src={trek.imageId} className="card-img-top mx-2 my-2" style={{width:"400px"}}/>
                                      <h5 className="card-title">{trek.trekName},{trek.placeName}</h5>
                                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                      <a href="#" className="btn btn-primary shadow float-middle" style={{borderRadius:"12px"}}>Book now</a>
                                    </div>
                                  </div>
                                </div>
                                
                                )
                        }

                        </div>
                        
            </div>
        )
    }
}

export default ViewTreks

