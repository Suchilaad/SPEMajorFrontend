import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" ><img src="logoNavBar.jpg" style={{borderRadius:'120px',opacity:0.80}} className="img-fluid" width="200"></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item">
          <Link className="nav-a active" to="/"><button type="button" className="btn btn-outline-light shadow mx-3"  style={{borderRadius:'12px'}} >Home</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/login"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Login</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a active" to="/signup"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Sign up</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
  </>
  )
}
