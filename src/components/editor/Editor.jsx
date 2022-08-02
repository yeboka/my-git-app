import React, {useEffect, useState} from 'react';
import './style.css';
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

export const Editor = ({currentFile, active, setActive, setCurrentFile, localRepo}) => {
	const [currValue, setCurrValue] = useState(currentFile.text);
	const [i, setI] = useState(currentFile.text ? (currentFile.text.length / 65) + 2 : 0)
	const [lines, setLines] = useState([]);

	useEffect(() => {
		const nums =[];
		for (let j = 0; j <= i; j++) {
			nums.push(j + 1);
		}
		setLines(nums)
	}, [i])

	useEffect(() => {
		setCurrValue(currentFile.text)
		setI(0)
	},[currentFile])

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && i < 31) setI(i + 1)
		else if(i >= 27) e.preventDefault()
		if (e.key === "Backspace" && i > 0) {
			e.preventDefault()
		}
	}

	const handleSaveClick = () => {
		for (let i = 0; i < localRepo.length; i++) {
			if (localRepo[i].name === currentFile.name) {
				if (localRepo[i].text !== currValue) localRepo[i].status = 'modified'
				localRepo[i].text = currValue
			}
		}
		setActive(!active)
	}

	return (
		 <div className={active ? 'editor-modal active' : 'editor-modal'} >
			 <div className={active ? 'editor-modal-content active' : 'editor-modal-content'} onClick={(e) => e.stopPropagation()}>
				 <div className="head box">
					 <p>File name: {currentFile.name}</p>
					 <IconButton color={"error"} onClick={() => {setActive(false)}}>
						 <CancelIcon />
					 </IconButton>
				 </div>
				 <div className="mid">
					 <div className="nums">
						 {
							 lines.map((item) => (
								  <div className={"num"} key={item}>
									  {item}
								  </div>
							 ))
						 }
					 </div>
					 <textarea rows={30} cols={65} value={currValue} onChange={(e) => setCurrValue(e.target.value)} onKeyDown={(e) => {handleKeyPress(e)}}/>
				 </div>
				 <div className="end box">
					 <div className="leftt">
						 <p>Last commit mes: {currentFile.lastCommitMess}</p>
					 </div>
					 <Button variant={"contained"} color={"success"} className={'saveBtn'} onClick={() => handleSaveClick()}>Save</Button>
				 </div>
			 </div>
		 </div>
	);
};