import React from 'react';
import homeIcon from '../../assets/icons8-menu-squared-50.png'
import './style.css'

export const LevelsButton = () => {
	return (
		 <div className={'icon'}>
			 <img src={homeIcon} alt="home" className="levels-icon"/>
		 </div>
	);
};