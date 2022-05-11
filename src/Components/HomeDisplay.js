import React from 'react'

export default function HomeDisplay() {
  return (
    <>
    <div className="jumbotron mx-2 my-5 position-absolute top-50 start-50 translate-middle text-center text-light shadow " style={{width:'500px',borderRadius:"12px",backgroundColor:'black',opacity:0.55}}>
  <h1 className="display-1"><img src='logo1.png' style={{width:'50px'}}></img><b> Trek Buddy!</b></h1>
  <p className="lead mx-3"><b>This is Trek buddy, that makes your trek exciting. Join us on Adventrous treks in near Bangalore.</b></p>
  <hr className="my-4"/>
  <p><b>What are you waiting for? Come with us on exciting treks!</b></p>
</div>
 
    </>
    )
}
