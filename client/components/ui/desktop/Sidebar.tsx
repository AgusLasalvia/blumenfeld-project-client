"use client";

import { useState } from "react";

import Image from "next/image";
import "@styles/Sidebar.css";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`sidebar ${open ? "open" : "closed"}`}>
            {/* Avatar */}
            <div className="avatar-container">
                <Image
                    src="/icons/company-profile.png"
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className="avatar"
                />
            </div>

            {/* Toggle Button */}
            <button className="toggle-btn" onClick={() => setOpen(!open)}>
                ▶
            </button>

            {/* Navigation */}
            <nav>
                <a href="/">
                    <div className="item">
                        <img src="/icons/home.png" alt="" />
                        <span className="label">Home</span>
                    </div>
                </a>

                <a href="/users">
                    <div className="item">
                        <img src="/icons/group.png" alt="" />
                        <span className="label">Groups</span>
                    </div>
                </a>

                <a href="/calendar">
                    <div className="item">
                        <img src="/icons/calendar.png" alt="" />
                        <span className="label">Events</span>
                    </div>
                </a>

                <a href="/payments">
                    <div className="item">
                        <img src="/icons/currency.png" alt="" />
                        <span className="label">Donations</span>
                    </div>
                </a>
            </nav>

            {/* Logout */}
            <div className="logout-container">
                <div className="line"></div>

                <a href="/logout">
                    <div className="item">
                        <img src="/icons/logout.png" alt="" />
                        <span className="label">Log Out</span>
                    </div>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
