import React, {useState} from 'react';
import {GameWindow} from "../../mainlayout/GameWindow";
import {Modal} from "../../levelModal/Modal";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";

export const Level2 = () => {

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)


	let theory = 'Suppose you are already in an empty git repository, what should you do now? First you can see that your screen is divided into three parts'
	let part2 = 'Local Repository'
	let part3 = 'Staging area'
	let part4 = 'Github repository (you will learn about this in further lessons)'
	let part5 = 'Local repository is just your folder on the local device (a repository is the same as a directory)'
	let part6 = <p>this lesson we will learn about Staging area. But first let's get into the Staging area, using the <span>git add 'filename'</span> or <span>git add .</span> command to add all files</p>
	let part7 = <p>to create a new file, use the <span>touch 'filename'</span> command</p>

	let task = <p>Create a new file <span>Cat.txt</span> and enter the nickname for your cat there (to do this, click on the file that appears) and then use the <span>git add </span> command to move the file to the staging area</p>

	const handleCheck = (localRepo, stage) => {
		let arr = localRepo.filter((file) => file.name === 'Cat.txt')
		let arr2 = stage.filter((file) => file.name === 'Cat.txt')
		if (arr.length === 1 && arr2.length === 1) {setSuccess(!success)}
		else setFail(!fail)

	}

	return (
		 <>
			 <GameWindow setLevelModal={setLevelModal} levelModal={levelModal} task={task} handleCheck={handleCheck}/>
			 <Modal active={levelModal} setActive={setLevelModal} level={'Level 2'} theory={theory} arg1={part2} arg2={part3} arg3={part4} arg4={part5} arg5={part6} arg6={part7} />
			 <Success active={success} setActive={setSuccess} toGo={'level3'}/>
			 <Fail active={fail} setActive={setFail}/>
		 </>
	);
};
