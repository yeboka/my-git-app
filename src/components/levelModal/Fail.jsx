import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

export const Fail = (props) => {
	return (
		 <div className = {props.active ? 'level-modal active' : 'level-modal'} onClick={() => {props.setActive(false)}}>
			 <div className={props.active ? 'level-modal-content active' : 'level-modal-content'} onClick={(e) => e.stopPropagation()}>
				 Fail
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
					 <IconButton size={'large'} color={'warning'} onClick={() => {props.setActive(false)}}>
						 <ReplayIcon fontSize={"inherit"}/>
					 </IconButton>
				 </div>
			 </div>
		 </div>
	);
};
