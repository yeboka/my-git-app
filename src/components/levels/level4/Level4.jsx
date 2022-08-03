import React, {useState} from 'react';
import {GameWindow} from "../../mainlayout/GameWindow";
import {Modal} from "../../levelModal/Modal";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";

export const Level4 = () => {

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)

	let theory = <><p>Since the last level, you probably have been wondering what is commit ?!</p>
		<p>Commit is one of the most important commands in git, the function of the commit command is that it takes a <span>"snapshot"</span> of your files in the staging area and saves them as a hash code in the commit history. What is it for?</p>
		<p>In order to view old commits and have the ability to roll back to the last commit where everything works if you suddenly broke your project</p>
		<p>To make a commit use the command</p>
		<span>git commit -m </span>"message"
		<p>the message of this commit is written in quotation marks, it should convey the meaning of changes in the project or it can be random words :)</p>
		<p>to look at the history of your commits, there is a <span>git log</span> command</p>
	</>

	let task = <p>Create two files <span>Cat.txt</span> and <span>Dog.txt</span> , in <span>Cat.txt</span> write "I love cats" and in <span>Dog.txt</span> "I don't like dogs", add these files to the staging area and commit, change the file <span>Dog.txt</span> "I love dogs too" and commit again and you can still see the history of commits with the help of <span>git log</span></p>

	const handleCheck = (localRepo, stage, log) => {
		let arr = localRepo.filter((file) => (file.name === 'Cat.txt' && file.status === "unmodified") || (file.name === 'Dog.txt' && file.status === "unmodified"))
		if (arr.length === 2 && log.length === 2) {setSuccess(!success)}
		else setFail(!fail)
	}

	return (
		 <>
			 <GameWindow setLevelModal={setLevelModal} levelModal={levelModal} task={task} handleCheck={handleCheck}/>
			 <Modal active={levelModal} setActive={setLevelModal} level={'Level 4'} theory={theory}/>
			 <Success active={success} setActive={setSuccess}/>
			 <Fail active={fail} setActive={setFail}/>
		 </>
	);
};

