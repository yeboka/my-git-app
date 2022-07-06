import './App.css';
import logo from './assets/github-1-5645865-4695723.png';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
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
          <div></div>
          <div></div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
