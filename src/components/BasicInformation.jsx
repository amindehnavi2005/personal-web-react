import React from 'react'
import "../screens/AboutMe.css"

export default function BasicInformation({ title, subtitle }) {
    return (
        <div className='aboutMeBasicInformationText'>
            <p className='basicInformationTitle'>
                {title}
                <span className='basicInformationSubTitle'>{subtitle}</span>
            </p>
        </div>
    )
}
