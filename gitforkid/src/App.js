import './App.css';
import {Landing} from './components/landing/Landing';
import { Modal } from './components/modal/Modal';
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
    name: 'box55',
    status: 'staged',
    commitMess: 'first box'
  },
  {
    name: 'box45',
    status: 'staged',
    commitMess: 'first box'
  },
]

const directoryBoxes = [
  {
    name: 'box14',
    status: 'untracked',
    commitMess: 'first box'
  }, 
  {
    name: 'box15',
    status: 'untracked',
    commitMess: 'first box'
  }, 
  {
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
        default:
          break;
      }}
    }
  }

  const gitPush = () => {
    let toPush = directory.filter((file) => file.status.includes('_toBeCommited'));
    console.log(toPush);
    toPush = [...repo, ...toPush];
    const newDirectory = directory.filter((file) => !(file.status.includes('_toBeCommited')))
    const pushed = toPush.map((file) => {
      file.status = 'unmodified';
      return file;
    })
    setRepo(pushed);
    setDirectory(newDirectory);
    console.log(pushed, directory);
  }

  const gitCimmit = (mes) => {
      //fixme
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
    <Modal active = {modalActive} setActive = {setModalActive}>
      <div>
      {allFiles.map((file) => (
        <div key = {file.name}>
          File name: <span>{file.name}</span> ,   status: <span>{file.status + ','}</span>
        </div> 
      ))}
      </div>
    </Modal>
    </div>
    
  );
}

export default App;