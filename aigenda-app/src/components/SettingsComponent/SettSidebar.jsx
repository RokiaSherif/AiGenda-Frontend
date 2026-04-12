import { ArrowLeft, Bell, HelpCircle, Info, LogOut, RefreshCcw, Shield, UserPlus } from "lucide-react";
import '../HomeComponent/home.css';
import './settings.css';
import { NavLink } from "react-router-dom";
const SettSidebar = ()=>{
    return(
        <div>
<aside className="settings-sidebar">
          <div style={{display: "flex", alignItems: "center", gap: "0.75rem"}}>
            <button className="control-btn" style={{background: "var(--bg-main)"}}><ArrowLeft/></button>
            <h2 style={{fontSize: "1.5rem", fontWeight: "700"}}>Settings</h2>
          </div>
          <nav className="settings-nav">
            <NavLink to='/' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><Bell/><span>Notifications</span></NavLink>
            <NavLink to='/' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><Shield/><span>Security</span></NavLink>
            <NavLink to='/' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><HelpCircle/><span>Help</span></NavLink>
            <NavLink to='/' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><RefreshCcw/><span>Update System</span></NavLink>
            <NavLink to='/' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><UserPlus/><span>Invite a friend</span></NavLink>
            <NavLink to='/settAbout' className={({isActive})=> isActive? "settings-nav-item active":"settings-nav-item"}><Info/><span>About</span></NavLink>
          </nav>
          <button className="logout-btn" style={{marginTop: "auto", paddingLeft: "1.25rem"}}><LogOut/><span>Log out</span></button>
        </aside>
        </div>
    )
}
export default SettSidebar;