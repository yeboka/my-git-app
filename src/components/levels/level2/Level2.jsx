import React, {useState} from 'react';
import {GameWindow} from "../../mainlayout/GameWindow";
import {Modal} from "../../levelModal/Modal";

export const Level2 = () => {

	const [levelModal, setLevelModal] = useState(true)
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)

	let theory = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumvLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'

	return (
		 <>
			 <GameWindow/>
			 <Modal active={levelModal} setActive={setLevelModal} level={'Level 2'} theory={theory}/>

		 </>
	);
};
