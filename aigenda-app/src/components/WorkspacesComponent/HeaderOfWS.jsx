import './stylesofWS.css';
import { Bell, ChevronLeft, ChevronRight, Search, TimerIcon } from "lucide-react";
import "../../components/HomeComponent/home.css";
import Setup from './focusMode/Setup';
import { useState } from "react";
const HeaderOfWS = () => {
    const [openFocusMode, setOpenFocusMode] = useState(false);
    return(
        <div>
            <header className="header">
            <div className="header-left">
            <div className="nav-controls">
            <button className="control-btn"><ChevronLeft/></button>
            <button className="control-btn"><ChevronRight/></button>
            </div>
            <div className="search-bar">
            <Search style={{position:'absolute',top:'7px',left:'10px',zIndex:'3'}} size={20}/>
            <input type="text" placeholder="Search..." className="search-input" style={{position:'relative'}}/>
            </div>
            </div>
            <div className="header-right" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button className="notification-btn">
            <Bell/>
            <span className="notification-dot"></span>
            </button>
            <button onClick={()=>{setOpenFocusMode(true)}} style={{border:'none',borderRadius:'10px',backgroundColor:'#7c3aed',color:'white',width:'180px',height:'40px',fontWeight:'500',fontSize:'15px',cursor:'pointer',display:'flex',alignItems:'center',gap:'5px',justifyContent:'center'}}><TimerIcon size={20}/>Start Focus Mode</button>
            </div>
            </header>
            {openFocusMode && <Setup setOpenFocusMode={setOpenFocusMode}/>}
        </div>
    )
};
export default HeaderOfWS;