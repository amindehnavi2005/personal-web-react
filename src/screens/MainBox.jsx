import React from 'react'
import './MainBox.css'
import MainHeader from '../components/MainHeader'
import AboutMe from './AboutMe'
import MyResume from './MyResume'
import MyServices from './MyServices'
import ContactUs from './ContactUs'


export default function MainBox({ mainBoxName }) {
    return (
        <div className='mainBox'>
            <MainHeader />
            <div className='mainBoxContainer'>
                {
                    mainBoxName == "Start" ? (<AboutMe />)
                        : mainBoxName == "درباره من" ? (<AboutMe />)
                            : mainBoxName == "رزومه من" ? (<MyResume />)
                                : mainBoxName == "خدمات من" ? (<MyServices />)
                                    : mainBoxName == "تماس با من" ? (<ContactUs />)
                                        : <AboutMe />
                }
            </div>
        </div>
    )
}
