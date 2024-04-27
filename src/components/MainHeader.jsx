import React from 'react'
import './MainHeader.css'

export default function MainHeader() {
    return (
        <div className='mainHeader'>
            <div className='mainHeaderRightPane'>
                <h2 className='programmerName'>امین دهنوی</h2>
                <span className='mainHeaderJobTag'>برنامه نویس وب</span>
            </div>
            <div className="mainHeaderEmptyPane"></div>
            <div className='mainHeaderLeftPane'>
                <div className="socialMediaContainer">
                    <div className="socialMediaIcon instagramIcon"><img className='socialMediaImg' src="./assets/instagramIcon.webp" alt="Instagram" /></div>
                    <div className="socialMediaIcon facebookIcon"><img className='socialMediaImg' src="./assets/facebookIcon.png" alt="Instagram" /></div>
                    <div className="socialMediaIcon pinterestIcon"><img className='socialMediaImg' src="./assets/pinterestIcon.png" alt="Instagram" /></div>
                    <div className="socialMediaIcon telegramIcon"><img className='socialMediaImg' src="./assets/telegramIcon.png" alt="Instagram" /></div>
                </div>
                <div className='mainHeaderButtonSection'>
                    <button className='downloadResumeButton'>دانلود رزومه</button>
                </div>
            </div>
        </div>
    )
}
