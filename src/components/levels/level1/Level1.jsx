import React, {useState} from 'react';
import {Modal} from "../../levelModal/Modal";
import './style.css'
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";


const Level1 = () => {

	let theory = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumvLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'

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
						 <label htmlFor={"first"}>First Question</label> <br/>
						 <input type="checkbox"  {...register('second')} />
						 <label htmlFor={"second"}>Second question</label> <br/>
						 <input type="checkbox"  {...register('third')}/>
						 <label htmlFor={"third"}>Third question</label> <br/>
						 <div className="submit-btn">
							 <Button type="submit" variant={"contained"} color={"success"}>SUBMIT</Button>
						 </div>
					 </form>
				 </div>

			 </div>
		 	<Modal active={levelModal} setActive={setLevelModal} level={'Level 1'} theory={theory}/>
			 <Success active={success} setActive={setSuccess}/>
			 <Fail active={fail} setActive={setFail}/>
		 </>
	);
};

export default Level1;