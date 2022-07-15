import './App.css';

import { v4 as uuid4} from 'uuid';
import { motion } from "framer-motion"
import { useState } from 'react';


import {Landing} from './components/landing/Landing';
import { Modal } from './components/modal/Modal';
import { BoxImg } from './components/box/BoxImg';

const repoBoxes = [
  {
    key: uuid4(),
    name: 'box1',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    key: uuid4(),
    name: 'box2',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    key: uuid4(),
    name: 'box3',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    key: uuid4(),
    name: 'box4',
    status: 'tracked',
    commitMess: 'first box'
  },
  {
    key: uuid4(),
    name: 'box5',
    status: 'tracked',
    commitMess: 'first box'
  }, 
]
const stageBoxes = [
  {
    key: uuid4(),
    name: 'box55',
    status: 'staged',
    commitMess: 'first box'
  },
  {
    key: uuid4(),
    name: 'box45',
    status: 'staged',
    commitMess: 'first box'
  },
]

const directoryBoxes = [
  {
    key: uuid4(),
    name: 'box14',
    status: 'untracked',
    commitMess: 'first box'
  }, 
  {
    key: uuid4(),
    name: 'box15',
    status: 'untracked',
    commitMess: 'first box'
  }, 
  {
    key: uuid4(),
    name: 'box16',
    status: 'untracked',
    commitMess: 'first box'
  }, 
]

function App() {

  // my git hub token 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

  const [repo, setRepo] = useState(repoBoxes);
  const [stage, setStage] = useState(stageBoxes);
  const [directory, setDirectory] = useState(directoryBoxes);
  const [modalActive, setModalActive] = useState(false);
  

  const allFiles = [...repo, ...stage, ...directory]


  const handleComand = (event) => {
    if (event.key === "Enter") {

      const text = event.target.value.substring(event.target.value.lastIndexOf('\n') + 1);
      let command = parseInput(text) + " ";
      if(parseInput(text)){
      console.log(command);
      let fileName = command.substring(command.indexOf(' ')).trim();
      switch (command.substring(0, command.indexOf(' '))) {
        case 'add':
          gitAdd(fileName);
          break;
        case 'commit': 
          gitCimmit(fileName);
          break;
        case 'status':
          setModalActive(true);
          break;
        case 'push':
          console.log('succes');
          gitPush();
          break;
        case 'pull':
          gitPull();
          break;  
        default:
          break;
      }}
    }
  }

  const gitPull = () => {
    let toDirectory = repo.map((file) => ({...file, key: uuid4()}))

    let toPull = [];
    for (let i = 0; i < toDirectory.length; i++) {
      const element = toDirectory[i];
      let count = 0;
      for (let j = 0; j < directory.length; j++) {
        const e = directory[j];
        if(e.name === element.name) count++;
        
      }
      console.log(count);
      if(count <= 1) {toPull.push(element)}
    }
    console.log(toPull);
    setDirectory(toPull);
  }
 
  const gitPush = () => {
    let toPush = directory.filter((file) => file.status.includes('_toBeCommited'));
    console.log(toPush);
    toPush = [...repo, ...toPush];
    const newDirectory = directory.map((file) => ({...file, status: 'unmodified', key: uuid4()}))
    const pushed = toPush.map((file) => {
      file.status = 'unmodified';
      file.key = uuid4();
      return file;
    })
    setRepo(pushed);
    setDirectory(newDirectory);
    console.log(pushed, directory);
  }

  const gitCimmit = (mes) => {
      //fixme
      if (mes[0] === '"' && mes[mes.length - 1] === '"'){
        mes = mes.substring(mes.indexOf('"')+ 1, mes.lastIndexOf('"'));
      
      
        const commit = stage.map((file) => {
          file.commitMess = mes;
          file.status = 'unmodified_toBeCommited';
          return file;
        })
        const newCommit = [...directory, ...commit];
        console.log(newCommit);
        setDirectory(newCommit);
        setStage([]);
      } else {
        console.log('you forget ticks');
      }


    
  }

  const gitAdd = (fileName) => {
    if (fileName === '*') {
      setDirectory([])
      const newStage = [...stage, ...directory]
      setStage(newStage);
    } else {
      const mkdir = directory.filter((val) => (fileName !== val.name))
      const cf = directory.filter((val) => (fileName === val.name))
      setDirectory(mkdir);
      const newStage = [...stage, cf[0]];
      const added = newStage.map((file) => {
        file.status = 'staged';
          return file;
      })
      setStage(newStage);
    }
  }

  const parseInput = (input) => {
    if(input.startsWith('git add')){
      return 'add' + input.substring(7)
    } else if(input.startsWith('git status')){
      return 'status'
    } else if(input.startsWith('git commit -m')){
      return 'commit' + input.substring(13)
    } else if(input.startsWith('git push origin')){
      return 'push'
    } else if(input.startsWith('git pull origin')){
      return 'pull'
    }else {
      return false;
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
              <motion.div className='mapedBox' key={box.key}
              whileHover={{ scale: 1.3 }}
              >
                <BoxImg name = {box.name} status = {box.status} />
              </motion.div>
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
              <motion.div className='mapedBox' key={box.key}
              whileHover={{ scale: 1.3 }}>
                <BoxImg name = {box.name} status = {box.status} />
              </motion.div>
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
              <motion.div className='mapedBox' key={box.key}
              whileHover={{ scale: 1.3 }}>
                <BoxImg name = {box.name} status = {box.status} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
    <Modal active = {modalActive} setActive = {setModalActive}>
      <div>
      {allFiles.map((file) => (
        <div key = {file.key}>
          File name: <span>{file.name}</span> ; status: <span>{file.status + ','}</span>
        </div> 
      ))}
      </div>
    </Modal>
    </div>
    
  );
}

export default App;