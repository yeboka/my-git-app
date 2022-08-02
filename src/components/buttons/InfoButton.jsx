import React from 'react'
import info1 from '../../assets/icons8-info-squared-50.png'
import './style.css'

export const InfoButton = ({onClick}) => {
	return (
		 <div className='icon' onClick={onClick}>
			 <img src={info1} alt="" className={'info-icon'}/>
		 </div>
	)
}
