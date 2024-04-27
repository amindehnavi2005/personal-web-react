import React from 'react'
import '../screens/Sidebar.css'

export default function SidebarMenuItem({ itemText, itemIcon }) {
    return (
            <>
                <img className='sidebarMenuItemIcon' src={itemIcon} alt="sidebarMenuItemIcon" />
                <li className='sidebarMenuItemText'>{itemText}</li>
            </>
    )
}
