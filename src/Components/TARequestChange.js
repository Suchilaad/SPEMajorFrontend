import React from 'react'

export default function TARequestChange() {
  return (
    <>
    <form className='text-center rounded float-start animate__animated animate__pulse my-5 mx-5' style={{borderRadius:'12px',backgroundColor:'black',opacity:0.55}}>
      <div className="mx-5 my-5">
      <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn btn-primary text-light mx-5 my-3 shadow" style={{borderRadius:'12px'}}>Submit</button>
    </form>
    </>
  )
}
