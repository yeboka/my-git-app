import React from 'react';
import commitIcon from '../../assets/icons8-commit-git-70.png'
import './style.css';

export const LogPopUp = ({active, setActive, log}) => {
    return (
        <div className = {active ? 'log-modal active' : 'log-modal'} onClick={() => {setActive(false)}}>
            {log.map((commit, index) => (
                <div key={commit.key} className={active ? 'log-modal-content active' : 'log-modal-content'} style={{transitionDelay: `0.${index}s`}}
                     onClick={(e) => e.stopPropagation()}>
                    <div>
                        <img src={commitIcon} alt={'-0-'} className='rotate-img90'/>
                    </div>
                    <div className={'title'} >
                        <p className={'commes'}>commit mes:</p>
                        <h2>{`${commit.message}`}</h2>
                        <p>{commit.date.toString().substring(0, 34)}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};