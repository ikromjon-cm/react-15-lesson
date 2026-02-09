import React from 'react';
import { LuClover } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosDocument } from "react-icons/io";
import { GiStarProminences } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { SiMicrostrategy } from "react-icons/si";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="site_logo">
                <button><LuClover />;</button>
            </div>
            <nav>
                <ul>
                    <li><CgMenuGridO /></li>
                    <li><IoIosDocument /></li>
                    <li><IoIosDocument /></li>
                    <li><GiStarProminences /></li>
                    <li><SiMicrostrategy /></li>
                    <li><IoIosSettings /></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
