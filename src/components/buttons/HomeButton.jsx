import React from 'react';
import homeIcon from '../../assets/icons8-home-squared-50.png'
import './style.css'

export const HomeButton = () => {
	return (
		 <div className={'icon'}>
			 <img src={homeIcon} alt="home" className="home-icon"/>
		 </div>
	);
};