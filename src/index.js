import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Level1 from "./components/levels/level1/Level1";
import {Level2} from "./components/levels/level2/Level2";
import {Level3} from "./components/levels/level3/Level3";
import {Level4} from "./components/levels/level4/Level4";
import {Menu} from "./components/levels/menu/Menu";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}/>
             <Route path="/levels" element={<Menu/>}/>
             <Route path="/levels/level1" element={<Level1/>}></Route>
             <Route path="/levels/level2" element={<Level2/>}></Route>
             <Route path="/levels/level3" element={<Level3/>}></Route>
             <Route path="/levels/level4" element={<Level4/>}></Route>
          </Routes>
       </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

