import React from 'react'
import boxImg from '../../assets/box.png';
import fileImg from '../../assets/file.png';
import { useState } from 'react';

import './style.css'

export const BoxImg = ( { name, status }) => {

  const [isHover, setHover] = useState(false);

  return (
  <>
  {isHover ? 
    <div className="onHover card d" onMouseOver={() => setHover(!isHover)}>
      <img src={fileImg} alt="" />
        {name}
        <div className="status">
          {status}
        </div>
    </div> : 
    <div className='card d'>
      <img src={fileImg} alt="" onMouseOver={() => setHover(!isHover)}/>
        {name}
    </div>}
  </>
    
  )
}
