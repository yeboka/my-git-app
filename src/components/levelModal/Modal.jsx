import React from 'react';
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

export const Modal = (props) => {
	return (
		 <div className = {props.active ? 'level-modal active' : 'level-modal'}>
			 <div className={props.active ? 'level-modal-content active' : 'level-modal-content'} onClick={(e) => e.stopPropagation()}>
				<div className="heading">
					{props.level}
				</div>

				 <div className="theory">
					 <p>{props.theory}</p>
					 <ul>
						 <li>{props.arg1}</li>
						 <li>{props.arg2}</li>
						 <li>{props.arg3}</li>
					 </ul>

					 {
						 props.arg4 && <p>{props.arg4}</p>
					 }
					 {
						  props.arg5 && <p>{props.arg5}</p>
					 }
					 {
						  props.arg6 && <p>{props.arg6}</p>
					 }
				 </div>

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
					 <IconButton size={'large'} color={"success"} onClick={() => {props.setActive(false)}}>
						 <ArrowCircleRightIcon fontSize={"inherit"}/>
					 </IconButton>
				 </div>
			 </div>
		 </div>
	);
};
