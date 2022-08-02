import React, {useState} from 'react';
import {GameWindow} from "../../mainlayout/GameWindow";
import {Modal} from "../../levelModal/Modal";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";
import '../level2/style.css'

export const Level3 = () => {

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)

	let theory = <><p>Do you have a question what happened?</p>
		<p>Using the <span>git add</span> command, you added the files you need to the staging area and thereby prepared them for the commit to save to the change history (more on this in the next level).</p>
		<p>but why are the files of different colors?, it's all about statuses!in order to check the status of your files just enter the <span>git status</span> command and you will see what is happening in your repository right now</p>
		<p>there are 4 statuses</p>
		<ul>
			<li><span className={'yellow'}>untracked</span> (when a file is not tracked by git, use git add to fix it)</li>
			<li><span className={'red'}>modified</span> (if the file was modified after the last commit)</li>
			<li><span className={'grey'}>unmodified</span> (if the file has not changed since the last commit)</li>
			<li><span className={'green'}>staged</span> (if the file is in the staging area and ready for the next commit)</li>
		</ul>
		<p>p.s. you will learn what a commit is in the next level</p>
	</>

	let task = <p>Create a file <span>Cat.txt</span> , write some text there so that the file becomes <span className={"red"}>modified</span>, also create a file <span>Dog.txt</span>, and prepare the file <span>Cat.txt</span> go to the commit (git add). See how their status changes</p>

	const handleCheck = (localRepo, stage) => {
		let arr = localRepo.filter((file) => (file.name === 'Cat.txt' && file.status === "modified") || (file.name === 'Dog.txt' && file.status === "untracked"))
		let arr2 = stage.filter((file) => file.name === 'Cat.txt')
		if (arr.length === 2 && arr2.length === 1) {setSuccess(!success)}
		else setFail(!fail)
	}

	return (
		 <>
			 <GameWindow setLevelModal={setLevelModal} levelModal={levelModal} task={task} handleCheck={handleCheck} />
			 <Modal active={levelModal} setActive={setLevelModal} level={'Level 3'} theory={theory}/>
			 <Success active={success} setActive={setSuccess} toGO={'level4'}/>
			 <Fail active={fail} setActive={setFail} toGo={'level3'}/>
		 </>
	);
};