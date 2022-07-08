import './App.css';
import {Landing} from './components/landing/Landing';
import { BoxImg } from './components/box/BoxImg';
import { useState } from 'react';
const repoBoxes = [
  {
    name: 'box1',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    name: 'box2',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    name: 'box3',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    name: 'box4',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    name: 'box5',
    status: 'tracked',
    commitMess: 'first box'
  }, 
]
const stageBoxes = [
  {
    name: 'box1',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    name: 'box2',
    status: 'tracked',
    commitMess: 'first box'
  },
]

const directoryBoxes = [
  {
    name: 'box1',
    status: 'tracked',
    commitMess: 'first box'
  },
  
]



function App() {

  const [repo, setRepo] = useState(repoBoxes);
  const [stage, setStage] = useState(stageBoxes);
  const [directory, setDirectory] = useState(directoryBoxes);


  const handleComand = (event) => {
    if (event.key === "Enter") {
      
    }
  }

  return (
    <div className='n'>
    

    <div className='container'>
      <div className='comand-line'>
        {/* <input type="text" /> */}
        <div className='task'>
          task
        </div>
        <textarea cols="50" rows="2" onKeyPress={(event) => {handleComand(event)}}></textarea>
      </div>
      <div className='zone repo'>
        <div className='zone-name'>  
          git repo
        </div>
        <div className='box-container'>
          {
            repo.map((box) => (
              <div className='mapedBox' key={box.name}>
                <BoxImg name = {box.name}/>
              </div>
            ))
          }
        </div>
      </div>
      <div className='zone  stage'>
        <div className='zone-name'>  
          Staging area
        </div>
        <div className='box-container'>
          {
            stage.map((box) => (
              <div className='mapedBox' key={box.name}>
                <BoxImg name = {box.name}/>
              </div>
            ))
          }
        </div>
      </div>
      <div className='zone directory'>
        <div className='zone-name'>  
          Working directory
        </div>
        <div className='box-container'>
          {
            directory.map((box) => (
              <div className='mapedBox' key={box.name}>
                <BoxImg name = {box.name}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
