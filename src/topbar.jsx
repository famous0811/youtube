import React from 'react';
import Logo from "./style/image/logo.png";
function Topbar() {
  return (
      <div className="MainTopBar">
        <div className="IconSetting SideButton">
        <span class="material-icons">dehaze</span>
        </div>
        <div className="Logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="Search">
          <form action="" className="SearchFrom">
            <input type="text" placeholder="검색"/>
            <button className="IconSetting"><span class="material-icons">search</span></button>
          </form>
        </div>
        <div className="TopBarIcon">
          <div className="IconSetting"><span class="material-icons">video_call</span></div>
          <div className="IconSetting"><span class="material-icons">apps</span></div>
          <div className="IconSetting"><span class="material-icons">notifications</span></div>
          <div>
            <div className="youer">
            </div>
            </div>
        </div>
      </div>
  );
}

export default Topbar;
