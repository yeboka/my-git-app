import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Level1 from "./components/levels/level1/Level1";
import {Level2} from "./components/levels/level2/Level2";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}/>
             <Route path="/levels" element={<Level1/>}/>
             <Route path="/levels/level1" element={<Level1/>}></Route>
             <Route path="/levels/level2" element={<Level2/>}></Route>
          </Routes>
       </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

