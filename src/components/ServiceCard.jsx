import React from 'react'
import '../screens/MyServices.css'

export default function ServiceCard({ title, imageSource, subTitle }) {
    return (
        <div className='serviceCard'>
            <img className='serviceIcon' src={imageSource} alt="serviceIcon" />
            <div className="serviceCardDetail">
                <h3 className='serviceCardTitle'>{title}</h3>
                <p className='serviceCardSubTitle'>{subTitle}</p></div>
        </div>
    )
}
