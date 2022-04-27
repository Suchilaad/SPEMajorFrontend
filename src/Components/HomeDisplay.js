import React from 'react'

export default function HomeDisplay() {
  return (
    <>
    <div className="jumbotron mx-2 my-5 position-absolute top-50 start-50 translate-middle text-center text-light shadow " style={{width:'500px',borderRadius:"12px",backgroundColor:'black',opacity:0.55}}>
  <h1 className="display-1"><img src='logo1.png' style={{width:'50px'}}></img><b> Trek Buddy!</b></h1>
  <p className="lead mx-3"><b>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</b></p>
  <hr className="my-4"/>
  <p><b>It uses utility classes for typography and spacing to space content out within the larger container.</b></p>
  <p className="lead"><b>
    <a className="btn btn-primary btn-lg my-5" href="/adminHome" role="button" style={{borderRadius:'12px'}}>Admin</a></b>
  </p>
</div>
 
    </>
    )
}
