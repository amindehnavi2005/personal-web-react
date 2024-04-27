import React from 'react';
import '../screens/MyResume.css';

export default function Progressbar({ title, percent }) {
    return (
        <div className="skillsProgressBarContainer">
            <div className="skillsProgressBarTitles">
                <p>{title}</p>
                <p>{percent}</p>
            </div>
            <div className="skillsProgressBar">
                <div className="progressBar" style={{ width: percent }}></div>
            </div>
        </div>
    )
}
