import React from 'react'

export default function WorkExperienceCard({ title, date, detail }) {
    return (
        <div className='workExperienceCard'>
            <h3 className='workExperienceTitle'>{title}</h3>
            <span className='workExperienceDate'>{date}</span>
            <p className='workExperienceDetail'>{detail}</p>
        </div>
    )
}
