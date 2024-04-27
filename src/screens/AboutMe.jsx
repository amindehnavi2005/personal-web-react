import React from 'react';
import '../screens/AboutMe.css';
import Typewriter from "typewriter-effect";
import BasicInformation from '../components/BasicInformation';
import TaskBox from '../components/TaskBox';

export default function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className="aboutMeCard">
                <div className="aboutMeCardDetail">
                    <h1 className='aboutMeCardTitle'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("من دانشجوی رشته نرم افزار")
                                    .pauseFor(1000)
                                    .deleteChars(22)
                                    .typeString("برنامه نویس تحت وب هستم")
                                    .start();
                            }
                            }
                        />
                    </h1>
                    <p className='aboutMeCardSubTitle'>مسلط به چندین زبان برنامه نویسی، کلیه امور گرافیکی و طراحی سایت با چند سال تجربه مفید.</p>
                    <button className='aboutMeCardButton'>تماس با من</button>
                </div>
                <div className="aboutMeCardImg">
                    <img className='personBackground' src="./assets/personBackground.png" alt="personBackground" />
                </div>
            </div>
            <div className="aboutMeDetail">
                <h2>درباره <span className='textGold'>من</span></h2>
                <p className='aboutMeSubTitle'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
            </div>
            <div className="aboutMeBasicInformation">
                <h2>اطلاعات <span className='textGold'>پایه</span></h2>
                <div className='aboutMeBasicInformationTextContainer'>
                    <BasicInformation title={"تاریخ تولد: "} subtitle={"1384/06/10"} />
                    <BasicInformation title={"مدرک تحصیلی: "} subtitle={"کاردانی"} />
                </div>
                <div className='aboutMeBasicInformationTextContainer'>
                    <BasicInformation title={"شماره تماس: "} subtitle={"09013260388"} />
                    <BasicInformation title={"وضعیت تاهل: "} subtitle={"مجرد"} />
                </div>
                <div className='aboutMeBasicInformationTextContainer'>
                    <BasicInformation title={"محل سکونت: "} subtitle={"مشهد، رضاشهر"} />
                    <BasicInformation title={"وب سایت: "} subtitle={"www.amindehnavi.ir"} />
                </div>
                <div className='aboutMeBasicInformationTextContainer'>
                    <BasicInformation title={"ایمیل: "} subtitle={"amin1384dehnavi@gmail.com"} />
                    <BasicInformation title={"وضعیت: "} subtitle={"آماده"} />
                </div>
            </div>
            <div className="aboutMeTaskBoxesContainer">
                <TaskBox taskIcon={"./assets/tasksIcon.png"} taskNumber="3" taskBoxText="پروژه های انجام شده" />
                <TaskBox taskIcon={"./assets/personsIcon.png"} taskNumber="..." taskBoxText="مشتریان راضی" />
                <TaskBox taskIcon={"./assets/medalIcon.jpg"} taskNumber="2" taskBoxText="جوایز دریافت شده" />
                <TaskBox taskIcon={"./assets/domainIcon.png"} taskNumber="1" taskBoxText="دامنه های بنام" />
            </div>
        </div>
    )
}
