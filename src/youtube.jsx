import React from 'react';
import "./style/youtube.scss";

//Element
import Topbar from "./topbar.jsx";
import Sidebar from "./sidebar.jsx";
import Maincontent from "./maincontent.jsx";

function youtube(props) {
    return (
        <div>
            <Topbar/>
            <Sidebar/>
            <Maincontent/>
        </div>
    );
}

export default youtube;