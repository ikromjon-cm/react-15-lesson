import React, { useState } from 'react';
import { LuClover } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosDocument } from "react-icons/io";
import { GiStarProminences } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { SiMicrostrategy } from "react-icons/si";
import './Sidebar.css';

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={open ? "sidebar open" : "sidebar"}>
            <div className="logo">
                <button onClick={() => setOpen(!open)}>
                    <LuClover />
                </button>
            </div>
            <nav className="menu">
                <ul>
                    <li><CgMenuGridO />{open && <p>Table</p>}</li>
                    <li><IoIosDocument />{open && <p>Menus</p>}</li>
                    <li><IoIosDocument />{open && <p>Order</p>}</li>
                    <li><GiStarProminences />{open && <p>Promos</p>}</li>
                    <li><SiMicrostrategy />{open && <p>Report</p>}</li>
                    <li><IoIosSettings />{open && <p>Settings</p>}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;