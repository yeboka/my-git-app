import React from 'react';
import './style.css'
import CheckBtn from '../../assets/icons8-tick-box-100.png'

export const ToCheckButton = ({ onClick }) => {
	return (
		 <div className={'icon'} onClick={onClick} >
			 <img src={CheckBtn} alt="home" className="check-icon"/>
		 </div>
	);
};