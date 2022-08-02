import React from 'react'
import fileImg from '../../assets/file.png';
import redFileImg from "../../assets/red.png";
import greenFileImg from "../../assets/green.png";
import yellowFileImg from "../../assets/yellow.png";
// import {ReactComponent as Green} from "../../assets/greenSvg.svg";
import { useState } from 'react';
import './style.css'

export const BoxImg = ( { name, status }) => {

  const [isHover, setHover] = useState(false);

  return (
  <>

      <div className='card d'>
        {
          status === 'modified' ?
              <img src={redFileImg} alt="" onMouseOver={() => setHover(!isHover)}/> :
              status=== 'untracked' ?
                  <img src={yellowFileImg} alt="" onMouseOver={() => setHover(!isHover)}/> :
                  status === 'staged' ?
                      <img src={greenFileImg} alt="" onMouseOver={() => setHover(!isHover)}/>  :
                      <img src={fileImg} alt="" onMouseOver={() => setHover(!isHover)}/>
        }
         {name}
      </div>


  </>
    
  )
}
