import React from 'react'
import boxImg from '../../assets/box.png';
import './style.css'

export const BoxImg = ( { name }) => {
  return (
    <div className='card'>
      <img src={boxImg} alt="" />
      {name}
    </div>
  )
}
