import './App.css';

import { v4 as uuid4} from 'uuid';
import { motion } from "framer-motion"
import { useState } from 'react';
import {gitAdd, gitCommit, gitPull, gitPush, mkdir} from './commands'
import Draggable from 'react-draggable';


// import {Landing} from './components/landing/Landing';
import { Modal } from './components/modal/Modal';
import { BoxImg } from './components/box/BoxImg';
import { InfoButton } from './components/infoButton/InfoButton';
import { LogPopUp } from "./components/logPopUp/LogPopUp";
import {StatusPopUp} from "./components/statusPopUp/StatusPopUp";

const repoBoxes = [
  {
    key: uuid4(),
    name: 'box1',
    status: 'unmodified',
    lastCommitMess: 'first commit'
  },
  {
    key: uuid4(),
    name: 'box2',
    status: 'unmodified',
    lastCommitMess: 'first commit'
  },
  {
    key: uuid4(),
    name: 'box3',
    status: 'unmodified',
    lastCommitMess: 'first commit'
  }
]
const stageBoxes = [
  {
    key: uuid4(),
    name: 'box55',
    status: 'staged',
    secondStatus: 'modified'
  },
  {
    key: uuid4(),
    name: 'box45',
    status: 'staged',
    secondStatus: 'modified'
  },
]
const directoryBoxes = [
  {
    key: uuid4(),
    name: 'box14',
    status: 'untracked',
    lastCommitMess: 'first commit',
    staged: false
  }, 
  {
    key: uuid4(),
    name: 'box15',
    status: 'modified',
    lastCommitMess: 'first commit',
    staged: false
  }, 
  {
    key: uuid4(),
    name: 'box16',
    status: 'untracked',
    lastCommitMess: 'first commit',
    staged: false
  }, 
]

function App() {

  // my git hub token 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


  const [repo, setRepo] = useState(repoBoxes);
  const [stage, setStage] = useState([]);
  const [localRepo, setLocalRepo] = useState(directoryBoxes);
  const [log, setLog] = useState([]);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [eMess, setEMess] = useState('');
  const [story, setStory] = useState([]);
  const [currentVal, setCurrentVal] = useState('');
  const [infoActive, setInfoActive] = useState(false);
  const [index, setIndex] = useState(story.length - 1);

  const handleComand = (event) => {
    if (event.key === "Enter") {
      const text = event.target.value.substring(event.target.value.lastIndexOf('\n') + 1);
      if(text === '') console.log('just enter');
      else {
      
      let command = parseInput(text) + " ";
      if(parseInput(text)){
        event.preventDefault();

        console.log(command);
      let fileName = command.substring(command.indexOf(' ')).trim();
      switch (command.substring(0, command.indexOf(' '))) {
        case 'add':
          gitAdd(fileName, stage, setStage, localRepo,setLocalRepo);
          setStory([...story, text]);
          setIndex(story.length);
          break;
        case 'commit':
          gitCommit(fileName, stage, setStage, log, setLog, localRepo,setLocalRepo);
          setStory([...story, text]);
          setIndex(story.length);
          break;
        case 'status':
          setModalStatus(true);
          setStory([...story, text]);
          setIndex(story.length);
          break;
        case 'log':
          setModalLog(true);
          setStory([...story, text]);
          setIndex(story.length);
          break;
        case 'push':
          setStory([...story, text]);
          setIndex(story.length);
          gitPush(localRepo, repo, setLocalRepo, setRepo, log, setLog);
          break;
        case 'pull':
          gitPull(repo, localRepo, setLocalRepo);
          setStory([...story, text]);
          setIndex(story.length);
          break;  
        case 'mkdir':
          mkdir(fileName, localRepo, setLocalRepo);
          setStory([...story, text]);
          setIndex(story.length);
          break;
        default:
          break;
      }
        setCurrentVal(currentVal + '\n')
      } else {
        console.log(event.target.value + 'invalid command');
        setEMess(' invalid command');
        setCurrentVal(currentVal + eMess);
      }}
    } else if (event.key=== "ArrowUp") {
      event.preventDefault();
      if (index >= 0){
        if (index === story.length - 1) {
          setCurrentVal( currentVal + story[index] )
        }else {
          let s = currentVal.substring(0, currentVal.lastIndexOf('\n'));
          setCurrentVal(s + '\n' + story[index])
        }
      }
      setIndex(index - 1)
    }
  }

  

  const parseInput = (input) => {
    if(input.startsWith('git add')){
      return 'add' + input.substring(7)
    } else if(input.startsWith('git status')){
      return 'status'
    } else if(input.startsWith('git log')){
      return 'log'
    } else if(input.startsWith('git commit -m')){
      return 'commit' + input.substring(13)
    } else if(input.startsWith('git push')){
      return 'push'
    } else if(input.startsWith('git pull origin')){
      return 'pull'
    }else if(input.startsWith('mkdir')){
      return 'mkdir' + input.substring(5)
    }else {
      return false;
    }
  }


  return ( 
    <div className='n'>
    <div className='container'>
      <Draggable>
      <div className='comand-line'>
        <div className='task-info'>
          <div className='task'>
            task
          </div>
          <InfoButton className="icon" onClick={() => setInfoActive(!infoActive)}/>
        </div>
        <textarea value={currentVal} onChange={(event) => {
          setCurrentVal(event.target.value)
        }} cols="50" rows="2" onKeyDown={(event) => {handleComand(event)}}></textarea>
      </div>
      </Draggable>
      
      <div className='zone repo'>
        <div className='zone-name'>  
          git repo
        </div>
        <div className='box-container'>
          {
            repo.map((box) => (
              <motion.div className='mapedBox' key={box.key}
              whileHover={{ scale: 1.3 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
              whileHover={{ scale: 1.3 }} 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
                <BoxImg name = {box.name} status = {box.status} />
              </motion.div>
            ))
          }
        </div>
      </div>
      <div className='zone directory'>
        <div className='zone-name'>  
          Local repository
        </div>
        <div className='box-container'>
          {
            localRepo
            .map((commit) => {
             return  <motion.div className='mapedBox' key={commit.key}
                          whileHover={{scale: 1.3}}
                          initial={{opacity: 0, scale: 0.5}}
                          animate={{opacity: 1, scale: 1}}
                          transition={{duration: 0.5}}>
                <BoxImg name={commit.name} status={commit.status}/>
              </motion.div>
            })
          }
        </div>
      </div>
    </div>

    <StatusPopUp active={modalStatus} setActive={setModalStatus} stage={stage} localRepo={localRepo}/>

    <LogPopUp active={modalLog} setActive={setModalLog} log={log}/>

    <Modal active={infoActive} setActive = {setInfoActive}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an
    </Modal>
    </div>
  );
}

export default App;