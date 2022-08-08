import React from 'react'
import './style.css'
import {Cat} from "../cat/Cat";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";



export const Landing = () => {

return (
    <div>
      <div className='main'>
         <div className="wrapper">
            <div className="mini-wrapper">
               <h1>Git for Kid</h1>
               <h3>Start learning the basics of GIT right now!</h3>
               <div className="bttns">
                  <Link to={'/levels/level1'} className={'link'}>
                     <Button className="start-bttn" variant={'contained'} color={'success'}>START>></Button>
                  </Link>
                  <Link to={'/levels'} className={'link'}>
                     <Button className="levels-bttn" variant={'outlined'} color={'success'}>LEVELS</Button>
                  </Link>
               </div>
               <div className="cute-cat">
                  <Cat/>
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
      <footer>
      © 2022 nfactorial <br/>
      Yerbolat Mukan
      </footer>
    </div>

  );
}
