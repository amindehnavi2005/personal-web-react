import React from 'react'
import './MyServices.css'
import ServiceCard from '../components/ServiceCard'
import UserComment from '../components/UserComment'

export default function MyServices() {
    return (
        <div className='myServices'>
            <div className="myServicesContainer">
                <h2>خدمات <span className="textGold">من</span></h2>
                <div className="servicesCardRow">
                    <ServiceCard imageSource={"./assets/serviceIcon1.png"} title={"برنامه نویسی"} subTitle={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                    <ServiceCard imageSource={"./assets/serviceIcon2.png"} title={"طراحی گرافیک"} subTitle={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                </div>
                <div className="servicesCardRow">
                    <ServiceCard imageSource={"./assets/serviceIcon3.png"} title={"طراحی سایت"} subTitle={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."} />
                </div>
            </div>
            <div className="customersComment">
                <h2 className='customersCommentText'>دیدگاه <span className="textGold">مشتریان</span></h2>
                <div className="userCommentRow">
                    <UserComment userImage={"./assets/user1.jpg"} />
                    <UserComment userImage={"./assets/user2.jpg"} />
                </div>
                <div className="userCommentRow">
                    <UserComment userImage={"./assets/user3.jpg"} />
                    <UserComment userImage={"./assets/user4.jpg"} />
                </div>
            </div>
        </div>
    )
}
