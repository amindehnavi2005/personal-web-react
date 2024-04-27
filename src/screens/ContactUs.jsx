import React from 'react'
import './ContactUs.css'
import BasicInformation from '../components/BasicInformation'

export default function ContactUs() {
    return (
        <div className="contactUs">
            <h2>تماس <span className='textGold'>با من</span></h2>
            <div className="contactUsContainer">
                <div className="contactUsInputs">
                    <input type="text" placeholder='نام و نام خانوادگی' />
                    <input type="text" placeholder='شماره تماس' />
                    <input type="text" placeholder='با سلام و خسته نباشید' />
                </div>
                <div className="contactUsDetails">
                    <BasicInformation title={"شماره تماس : "} subtitle={"09013260388"} />
                    <BasicInformation title={"محل سکونت : "} subtitle={"مشهد، رضا شهر"} />
                    <BasicInformation title={"ایمیل : "} subtitle={"amin1384dehnavi@gmail.com"} />
                    <BasicInformation title={"وبسایت : "} subtitle={"www.amindehnavi.ir"} />
                </div>
            </div>
        </div>
    )
}
