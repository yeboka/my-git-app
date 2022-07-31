import React from 'react'
import './style.css'

import logo from '../../assets/github-1-5645865-4695723.png';
import boxes from '../../assets/boxes.png';
import {ThemeProvider,createTheme} from '@mui/material/styles';
import {Cat} from "../cat/Cat";
import Button from "@mui/material/Button";



export const Landing = () => {

return (
    <div>
      <div className='main'>
         <div className="wrapper">
            <div className="mini-wrapper">
               <h1>Git for Kid</h1>
               <h3>Start learning the basics of GIT right now!</h3>
               <div className="bttns">
                  <Button className="start-bttn" variant={'contained'} color={'success'}>START>></Button>
                  <Button className="levels-bttn" variant={'outlined'} color={'warning'}>LEVELS</Button>
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
