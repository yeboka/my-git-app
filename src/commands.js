import { v4 as uuid4} from 'uuid';

const mkdir = (fileName, directory, setDirectory) => {
    console.log(fileName);
    setDirectory([...directory, {key: uuid4(), name: fileName, status: 'untracked'}])
  }

  const gitPull = (repo, directory, setDirectory) => {
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
 
  const gitPush = (directory, repo, setDirectory, setRepo) => {
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

  const gitCommit = (mes, stage, setStage, log, setLog, localRepo) => {
      if (mes[0] === '"' && mes[mes.length - 1] === '"'){
        mes = mes.substring(mes.indexOf('"')+ 1, mes.lastIndexOf('"'));

        const commit = {
          key: uuid4(),
          author: 'you :0',
          date: new Date(),
          message: mes,
          files: [...stage]
        }

        for (let i = 0; i < stage.length; i++) {
          for (let j = 0; j < localRepo.length; j++) {
            if (stage[i].name === localRepo[j].name)
              localRepo[j].status = 'unmodified'
          }
        }
        setLog([...log, commit])
        setStage([]);
      } else {
        console.log('you forget ticks');
      }
  }

  const gitAdd = (fileName, stage, setStage, directory, setDirectory) => {
    if (fileName === '.') {
      const newStage = [...stage, ...directory.map((file) => ({...file, status: 'staged', key: uuid4()}))]
      setStage(newStage);
    } else {
      const cf = directory.filter((val) => (fileName === val.name))
      const newStage = [...stage, cf[0]];
      setStage([...newStage.map((file) => ({...file,status: 'staged', key: uuid4()}))]);
    }
  }

export {gitAdd, gitCommit, gitPull, gitPush, mkdir}