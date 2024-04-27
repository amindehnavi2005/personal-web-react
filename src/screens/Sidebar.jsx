import React from 'react';
import './Sidebar.css'
import SidebarMenuItem from '../components/SidebarMenuItem';

export default function Sidebar({ changeScreen }) {
    return (
        <div className='sidebar'>
            <div className='sidebarAvatarContainer'>
                <img className='sidebarAvatarImg' src="./assets/avatar.jpg" alt="avatarImage" />
            </div>
            <ul className='sidebarMenu'>
                <button id="sidebarMenuItem1" className='sidebarMenuItem' onClick={(event) => { changeScreen(event) }}><SidebarMenuItem itemText={"درباره من"} itemIcon={"../assets/aboutMeIcon.png"} /></button>
                <button id="sidebarMenuItem2" className='sidebarMenuItem' onClick={(event) => { changeScreen(event) }}><SidebarMenuItem itemText={"رزومه من"} itemIcon={"../assets/resumeIcon.png"} /></button>
                <button id="sidebarMenuItem3" className='sidebarMenuItem' onClick={(event) => { changeScreen(event) }}><SidebarMenuItem itemText={"خدمات من"} itemIcon={"../assets/servicesIcon.png"} /></button>
                <button id="sidebarMenuItem5" className='sidebarMenuItem' onClick={(event) => { changeScreen(event) }}><SidebarMenuItem itemText={"تماس با من"} itemIcon={"../assets/phoneIcon.png"} /></button>
            </ul>
        </div>
    )

}
