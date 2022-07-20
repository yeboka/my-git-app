import React from 'react'
import twofile from '../../assets/txofilecommitg.png'
import onefile from '../../assets/one file commit.png'
import files from "../../assets/commit files.png";


import './style.css'

export const CommitImg = ({commit}) => {
  return (
    <>
    {commit.commitFiles.length > 2 ? 
        <div className="">
        <img src={files} alt="" />
          {commit.message}
          {/* <div className="status">
            {commit.date.toString()}
          </div> */}
        </div> :
        (commit.commitFiles.length === 1) ?
        <div className="">
        <img src={onefile} alt="" />
          {commit.message}
          {/* <div className="status">
            {commit.date.toString()}
          </div> */}
        </div> :
        (commit.commitFiles.length === 2) ?
        <div className="">
        <img src={twofile} alt="" />
          {commit.message}
          {/* <div className="status">
            {commit.date.toString()}
          </div> */}
        </div> :
        ''
    }
    </>
  )
}
