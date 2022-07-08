import React from 'react'
import './style.css'
import logo from '../../assets/github-1-5645865-4695723.png';
import Button from '@mui/material/Button';
import boxes from '../../assets/boxes.png';
import {ThemeProvider,createTheme} from '@mui/material/styles';



export const Landing = () => {

const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                background: "#1E2022",
                color: "#834dda",
                stroke: "#834dda",
              },
            },
        },
    },
});
  
return (
    <ThemeProvider theme={theme}>
    <div>
        <nav className="navbar">
        <img className='logo' src={logo} alt="" />
        <div className="title">
          MY GIT APP 
        </div>
        <div className="navButtons">
        <Button className='navButton'>LEVELS</Button>
        <Button className='navButton'>SIGN IN</Button>
        </div>
      </nav>
      <div className='main'>
        <div>
          <div className='text'>start learning <span>Git</span> right now</div>
          <div className='buttons'>
            <Button variant='outlined' >INTRODUCTION</Button>
            <Button variant='outlined' >LEARN BRANCHES</Button>
          </div>
        </div>
        <div className='boxes'>
          <img src={boxes} alt="" />
        </div>
      </div>
      <footer>
      © 2022 nfactorial <br/>
      Yerbolat Mukan
      </footer>
    </div>
    </ThemeProvider>
  );
}
