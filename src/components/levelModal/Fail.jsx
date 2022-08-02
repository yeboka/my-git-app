import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Catcat from '../../assets/cute-cat-gaming-icon-illustration-animal-game-icon-concept-isolated-flat-cartoon-style_138676-1271-PhotoRoom.png'


export const Fail = (props) => {
	return (
		 <div className = {props.active ? 'level-modal active' : 'level-modal'} onClick={() => {props.setActive(false)}}>
			 <div className={props.active ? 'level-modal-content active' : 'level-modal-content'} onClick={(e) => e.stopPropagation()}>
				 <h2 className={'fail-heading'}>Ooops :(</h2>
				 <h3 className={'h3'}>Try again!</h3>
				 <img className={'cat-cat'} src={Catcat} alt=""/>
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
					 <IconButton size={'large'} color={'warning'} onClick={() => {window.location.reload(false);}}>
						 <ReplayIcon fontSize={"inherit"}/>
					 </IconButton>
				 </div>
			 </div>
		 </div>
	);
};
