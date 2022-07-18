import React from 'react'
import info from '../../assets/info.png'

export const InfoButton = ({ onClick }) => {
  return (
    <div className='icon' onClick={onClick}>
        <img src={info} alt="" />
    </div>
  )
}
