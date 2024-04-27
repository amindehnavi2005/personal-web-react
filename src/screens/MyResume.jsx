import React from 'react';
import './MyResume.css';
import WorkExperienceCard from '../components/WorkExperienceCard';
import Progressbar from '../components/Progressbar';

export default function MyResume() {
    return (
        <div className='myResume'>
            <div className="records">
                <div className="eductionalRecords">
                    <h2>سوابق <span className='textGold'>تحصیلی</span></h2>
                    <WorkExperienceCard title={"مدرک دیپلم"} date={"1398-1401"} detail={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                    <WorkExperienceCard title={"مدرک کاردانی"} date={"اکنون - 1402"} detail={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                </div>
                <div className="workExperienceRecords">
                    <h2>سوابق <span className='textGold'>شغلی</span></h2>
                    <WorkExperienceCard title={"کارآموز شرکت ره آورد داده افزا"} date={"1398-1401"} detail={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                    <WorkExperienceCard title={"بهترین برنامه موبایل"} date={"1401"} detail={"جایزه بهترین برنامه موبایل در مسابقات جشنواره امید فردا"} />
                    <WorkExperienceCard title={"رتبه سوم برنامه نویسی موبایل"} date={"1401"} detail={"رتبه سوم برنامه نویسی موبایل طراحی اپلیکیشن در مسابقات جشنواره امیدِ فردا."} />
                </div>
            </div>
            <div className="skills">
                <div className="otherSkills">
                    <h2>دیگر  <span className='textGold'>مهارت ها</span></h2>
                    <Progressbar title={"Adobe Photoshop"} percent={"75%"} />
                    <Progressbar title={"زبان انگلیسی"} percent={"30%"} />
                </div>
                <div className="programSkills">
                    <h2>مهارت های <span className='textGold'>برنامه نویسی</span></h2>
                    <Progressbar title={"HTML - CSS"} percent={"75%"} />
                    <Progressbar title={"React Js"} percent={"65%"} />
                    <Progressbar title={"Java Script"} percent={"60%"} />
                </div>
            </div>
        </div>
    )
}
