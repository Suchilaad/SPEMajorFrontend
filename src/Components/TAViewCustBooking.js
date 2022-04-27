import React from 'react'

export default function TAViewCustBooking() {
  return (
    <>
    <div className='d-flex justify-content-center my-5'>
   <form className="d-flex rounded float-start">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light shadow mx-3" style={{borderRadius:'12px'}} type="submit">Search</button>
      </form>
      </div>
    <div>
    <table className="table table-dark" style={{opacity:0.55}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
  </div>
    </>
  )
}
