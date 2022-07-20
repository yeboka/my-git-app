import React from 'react'
import info from '../../assets/info.png'
import './style.css'

export const InfoButton = ({ onClick }) => {
  return (
    <div className='icon' onClick={onClick}>
        <img src={info} alt="" />
    </div>
  )
}
