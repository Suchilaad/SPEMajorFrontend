import React from 'react'

export default function TAProfile() {
  return (
    <>
    <form className='text-center rounded float-start animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
    <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Enter Current Password'/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Enter New Password'/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Re-enter New Password'/>
      </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn btn-primary text-light mx-5 my-3 shadow" style={{borderRadius:'12px'}}>Submit</button>
    </form>
    
    <form  className='text-center rounded float-start animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
      <div className="mx-5 my-4">
      <textarea class="form-control" style={{width:"300px", height:"190px"}} placeholder="Enter New Address" id="floatingTextarea"></textarea>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn btn-primary text-light mx-5 my-3 shadow" style={{borderRadius:'12px'}}>Submit</button>
    </form>
    
    <form  className='text-center rounded float-start animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
      <div className="mx-5 my-4">
      <input type="text" class="form-control" placeholder="Enter New Contact no." aria-label="Username"/>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn btn-primary text-light mx-5 my-3 shadow" style={{borderRadius:'12px'}}>Submit</button>
    </form>
    </>
  )
}
