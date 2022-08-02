import React from 'react';
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import catcat from '../../assets/cute-cat-working-laptop-cartoon-illustration-animal-technology-concept-isolated-flat-cartoon-style_138676-2727-PhotoRoom.png'
export const Success = (props) => {
	return (
		 <div className = {props.active ? 'level-modal active' : 'level-modal'} onClick={() => {props.setActive(false)}}>
			 <div className={props.active ? 'level-modal-content active' : 'level-modal-content'} onClick={(e) => e.stopPropagation()}>
				<h2 className={'success-heading'}>SUCCESS</h2>
				 <img className={'cat-cat'} src={catcat} alt=""/>
				 <div className="btn-group">
					 <Link to={'/'}>
						 <IconButton size={'large'} color={'error'}>
							 <HomeIcon fontSize={"inherit"}/>
						 </IconButton>
					 </Link>
					 <Link to={"/levels"}>
						 <IconButton size={'large'} color={'default'}>
							 <MenuIcon fontSize={"inherit"}/>
						 </IconButton>
					 </Link>
					 <Link to={`/levels/${props.toGo}`}>
						 <IconButton size={'large'} color={"success"} onClick={() => {props.setActive(false)}}>
							 <NextPlanIcon fontSize={"inherit"}/>
						 </IconButton>
					 </Link>
				 </div>
			 </div>
		 </div>
	);
};
