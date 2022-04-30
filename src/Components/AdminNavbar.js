import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <a className="navbar-brand" to="/"><img src="logoNavBar.jpg" style={{borderRadius:'120px',opacity:0.80}} className="img-fluid" width="200"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item">
          <Link className="nav-a active" to="/adminHome"><button type="button" className="btn btn-outline-light shadow mx-3"  style={{borderRadius:'12px'}} >Home</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/viewGuides"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >View Guides</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/addGuides"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Add Guides</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/viewTreks"><button type="button" className="btn btn-outline-light shadow mx-3"  style={{borderRadius:'12px'}} >View Treks</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/addTreks"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Add Treks</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/viewCust"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >View Customers</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Logout</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
