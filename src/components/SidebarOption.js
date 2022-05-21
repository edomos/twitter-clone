import React from 'react';
import '../css/SidebarOption.css'

const SidebarOption = ({ icon, description }) => {
    return (
        <div className="sidebar__option">
            <div className="sidebar__option--icon">{icon}</div>
            <h1 className="sidebar__option--description">{description}</h1>
        </div>
    );
}

export default SidebarOption;
