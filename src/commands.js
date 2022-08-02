import { v4 as uuid4} from 'uuid';

const mkdir = (fileName, directory, setDirectory) => {
    console.log('',fileName);
    setDirectory([...directory, {key: uuid4(), name: fileName, status: 'untracked'}])
  }

  const gitPull = (repo, local, setLocal) => {
    //to fix
  }
// проходим по гит лог и чекаем статус pushed
// если он false то добавлем в массив(сет) для будущего пуша (с конца)
// фильтреум массив или сет и добавляем в ремоут репо
  //
// задаем статус логу pushed
  const gitPush = (localRepo, repo, setLocalRepo, setRepo, log, setLog) => {
    const toPushCommits = log.filter((commit) => !commit.isPushed)
    const files = []

    for (let i = 0; i < toPushCommits.length; i++) {
      for (let j = 0; j < toPushCommits[i].files.length; j++) {
        files.push(toPushCommits[i].files[j]);
      }
    }
    const newRepo = [...repo, ...files]
    let temp = []
    for (let i = 0; i < newRepo.length; i++) {
      let count = 0;
      for (let j = 0; j < repo.length; j++) {
        if(repo[j].name === newRepo[i].name) count++;
      }
      if(count <= 1) {temp.push(newRepo[i])}
    }
    console.log(temp)

    for (let i = 0; i < temp.length; i++) {
      let count  =0;
      for (let j = 0; j < temp.length; j++) {
        if (temp[i].name === temp[j].name) count++;
      }
      if (count === 2) temp.splice(i, 1);
    }


    setLog([...log.map((commit) => ({...commit, isPushed: true}))])
    setRepo([...temp.map((file) => ({...file, status: 'unmodified'}))]);
  }

  const gitCommit = (mes, stage, setStage, log, setLog, localRepo, setLocalRepo) => {
      if (mes[0] === '"' && mes[mes.length - 1] === '"'){
        mes = mes.substring(mes.indexOf('"')+ 1, mes.lastIndexOf('"'));

        const commit = {
          key: uuid4(),
          author: 'you :0',
          date: new Date(),
          message: mes,
          files: [...stage],
          isPushed: false
        }

        for (let i = 0; i < stage.length; i++) {
          for (let j = 0; j < localRepo.length; j++) {
            if (stage[i].name === localRepo[j].name)
              localRepo[j].status = 'unmodified'
          }
        }

        setLocalRepo([...localRepo.map((file) => ({...file, staged: true}))])
        setLog([...log, commit])
        setStage([]);
      } else {
        console.log('you forget ticks');
      }
  }

  const gitAdd = (fileName, stage, setStage, directory, setDirectory) => {
    let newStage = [];
    if (fileName === '.') {
      newStage = [...stage, ...directory.map((file) => ({...file, secondStatus: file.status, status: 'staged', key: uuid4()}))]
      setDirectory([...directory.map((file) => ({...file, staged: true}))])
    } else {
      const cf = directory.filter((val) => (fileName === val.name))
      newStage = [...stage, cf[0]];
      setDirectory([...directory.map((file) => {
        if (file.name === fileName) return {...file, staged: true}
        return file;
      }
      )])
      newStage = ([...newStage.map((file) => ({...file, secondStatus: file.status, status: 'staged', key: uuid4()}))]);
    }
    for (let i = 0; i < newStage.length; i++) {
      let count  =0;
      for (let j = 0; j < newStage.length; j++) {
        if (newStage[i].name === newStage[j].name) count++;
      }
      if (count === 2) newStage.splice(i, 1);
    }

    setStage(newStage);
  }

export {gitAdd, gitCommit, gitPull, gitPush, mkdir}