import React from 'react';
import './style.css';
import octocat from "../../../assets/icons8-octocat-100.png";
import {IconButton} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Cat} from "../../cat/Cat";

export const Menu = ({active, setActive}) => {

	const levels = [{id: 1, name: 'About GIT'}, {id: 2, name: 'git add'}, {id: 3, name: 'git status'}, {
		id: 4,
		name: 'git commit'
	}]

	return (
		 <div className={'lev-modal active'}>
			 <div className="wrapper">
				 <div className="mini-wrapper">
					 {levels.map((level) => (
						  <Link to={`/levels/level${level.id}`} className={'link'}>
							  <div key={level.id} className={'lev-modal-content active'}
									 style={{transitionDelay: `0.${level.id}s`}}>
								  <div>
									  <img src={octocat} alt={'-0-'}/>
								  </div>
								  <div className={'lev-name'}>
									  <span>{level.id}.</span>
									  <h2>{level.name}</h2>
								  </div>
							  </div>
						  </Link>

					 ))}

					 <div className="gg">
						 <Link to={'/'}>
							 <IconButton size={'large'} color={'warning'}>
								 <HomeIcon fontSize={"inherit"}/>
							 </IconButton>
						 </Link>
					 </div>
				 </div>
				 <ul className="bg-bubbles">
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
					 <li></li>
				 </ul>
			 </div>

		 </div>

	);
};

