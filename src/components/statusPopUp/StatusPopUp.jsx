import React from 'react';
import './style.css';

export const StatusPopUp = ({active, setActive, stage, localRepo}) => {


    const notStaged = localRepo.filter((file) => !file.staged)

    return (
        <div className = {active ? 'status-modal active' : 'status-modal'} onClick={() => {setActive(false)}}>
            <div className={active ? 'status-modal-content active' : 'status-modal-content'} onClick={(e) => e.stopPropagation()}>
                <div className={'to-be-commit'} >
                    <h2>Changes to be commited</h2>
                    <div className={'info'}>
                        <div className={'names'}>
                            <h4>File name</h4>
                            {stage.map((file) => (
                                <p key={file.key}>{file.name}</p>
                            ))}
                        </div>
                        <div className={'status'}>
                            <h4>Status</h4>
                            {stage.map((file) => (
                                <p key={file.key}>{file.secondStatus}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={active ? 'status-modal-content active' : 'status-modal-content'} onClick={(e) => e.stopPropagation()}>
                <div className={'to-be-commit'} >
                    <h2>Changes not staged for commit</h2>
                    <div className={'info'}>
                        <div className={'names'}>
                            <h4>File name</h4>
                            {notStaged.map((file) => (
                                <p key={file.key}>{file.name}</p>
                            ))}
                        </div>
                        <div className={'status'}>
                            <h4>Status</h4>
                            {notStaged.map((file) => (
                                <p key={file.key}>{file.status}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
