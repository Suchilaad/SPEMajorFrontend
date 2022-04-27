import React from 'react'

export default function BookNow(props) {
  return (
    <div>
      <p style={{color:'white'}}>{sessionStorage.getItem('placeId')}</p>
    </div>
  )
}
