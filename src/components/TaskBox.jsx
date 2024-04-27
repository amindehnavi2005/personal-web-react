import React from 'react'
import '../screens/AboutMe.css'

export default function TaskBox({ taskIcon, taskNumber, taskBoxText }) {
    return (
        <div className="taskBoxContainer">
            <div className='TaskBoxTopSection'>
                <img className="taskBoxImg" src={taskIcon} alt="Icon" />
                <h2 className='taskBoxNumber'>{taskNumber}</h2>
            </div>
            <p className='taskBoxText'>{taskBoxText}</p>
        </div>
    )
}
