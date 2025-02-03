import { useState } from "react";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
    const [active, setActive] = useState("Stats");

    const menuItems = ["Description", "Stats", "Moves" , "Effects", "Evolution"];

    return (
        <div className="sidebar">
            {menuItems.map((item) => (
                <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`sidebar-btn ${active === item ? "active" : ""}`}
                >
                    {item}
                </button>
            ))}
            <button className="sidebar-btn arrow">⌄</button>
        </div>
    );
};

export default Sidebar;
