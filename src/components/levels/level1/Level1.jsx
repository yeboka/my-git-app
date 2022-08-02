import React, {useState} from 'react';
import {Modal} from "../../levelModal/Modal";
import './style.css'
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";


const Level1 = () => {

	let theory = "Hi, in this short course you will learn about the basics of the GIT version control system, but first let's find out what GIT is and what benefits it gives? "
	let arg1 = "Allows you to track changes made by us or other team members"
	let arg2 = "Synchronize the code to work in a larger team or company"
	let arg3 = "Test or make new changes without affecting the main branch"

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data)
		if (watch('first') && watch('second') && watch('third')) setSuccess(true)
		else setFail(true)
	};

	return (
		 <>
			 <div className="lev">
				 <div className="question">
					 <h2>What are the possibilities of git?</h2>
				 </div>
				 <div className="my-form">
					 <form onSubmit={handleSubmit(onSubmit)}>
						 <input type="checkbox" {...register('first')}/>
						 <label htmlFor={"first"}>Code synchronization</label> <br/>
						 <input type="checkbox"  {...register('second')} />
						 <label htmlFor={"second"}>Tracking the history of changes</label> <br/>
						 <input type="checkbox"  {...register('third')}/>
						 <label htmlFor={"third"}>Safe modification of the project and testing</label> <br/>
						 <div className="submit-btn">
							 <Button type="submit" variant={"contained"} color={"success"}>SUBMIT</Button>
						 </div>
					 </form>
				 </div>

			 </div>
		 	<Modal active={levelModal} setActive={setLevelModal} level={'Level 1'} theory={theory} arg1={arg1} arg2={arg2} arg3={arg3}/>
			 <Success active={success} setActive={setSuccess} toGo={'level2'}/>
			 <Fail active={fail} setActive={setFail}/>
		 </>
	);
};

export default Level1;