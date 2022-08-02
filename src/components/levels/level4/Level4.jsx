import React, {useState} from 'react';
import {GameWindow} from "../../mainlayout/GameWindow";
import {Modal} from "../../levelModal/Modal";
import {Success} from "../../levelModal/Success";
import {Fail} from "../../levelModal/Fail";

export const Level4 = () => {

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)

	let theory = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumvLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'

	return (
		 <>
			 <GameWindow/>
			 <Modal active={levelModal} setActive={setLevelModal} level={'Level 4'} theory={theory}/>
			 <Success active={success} setActive={setSuccess}/>
			 <Fail active={fail} setActive={setFail}/>
		 </>
	);
};

