import React from 'react'

export default function CustNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="profile.jpg" style={{borderRadius:'120px',width:'50px'}} className="img-fluid" width="200"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item">
          <a className="nav-a active" href="/travelAgentProfile"><button type="button" className="btn btn-danger shadow mx-3"  style={{borderRadius:'12px'}} >Home</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/travelAgentViewCust"><button type="button" className="btn btn-danger shadow mx-3" style={{borderRadius:'12px'}} >View Bookings</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/travelAgentReqChange"><button type="button" className="btn btn-danger shadow mx-3" style={{borderRadius:'12px'}} >View History</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/travelAgentReqChange"><button type="button" className="btn btn-danger shadow mx-3" style={{borderRadius:'12px'}} >Edit Profile</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/travelAgentReqChange"><button type="button" className="btn btn-danger shadow mx-3" style={{borderRadius:'12px'}} >Logout</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
