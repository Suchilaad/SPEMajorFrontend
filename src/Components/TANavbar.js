import React from 'react'
export default function TANavbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="logoNavBar.jpg" style={{borderRadius:'120px',opacity:0.80}} className="img-fluid" width="200"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-a active" href="/guideHome"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >View Customers Bookings</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/guideProfile"><button type="button" className="btn btn-outline-light shadow mx-3"  style={{borderRadius:'12px'}} >Edit Profile</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/guideReqChange"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Request Region Change</button></a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" href="/"><button type="button" className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} >Logout</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
