import { BadgeCheck, BellRing, NotebookPen, RotateCcw, RotateCw, Settings } from "lucide-react";
import SettSidebar from "./SettSidebar"

const SystemUpdate = ()=>{
    return(
        <div className="app-container">
            <div className="main-content">
                <SettSidebar/>
                <div className="page-container">
                 <div className="update-container">
                    <div style={{width:'100%'}}>
                     <h2>System Update</h2>
                     <p style={{color:'#64748b'}}>Manage your application version and update preferences.</p>   
                    </div>
                    <div className="box">
                        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',gap:'15px'}}>
                            <div style={{backgroundColor:'#f5e8fe',color:'var(--primary)',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}><BadgeCheck/></div>
                            <div>
                             <div style={{display:'flex',alignItems:'center',gap:'8px'}}><h5 style={{letterSpacing:'1px',color:'#94a3b8'}}>SYSTEM STATUS</h5>
                             <div style={{color:'#16a34a',backgroundColor:'#dcfce7',width:'max-content',padding:'2px 10px',borderRadius:'10px'}}>UP TO DATE</div>
                             </div>   
                             <h4>Current Version: v2.4.0</h4>   
                             <p style={{color:'#94a3b8'}}>Your system is currently running the latest stable release.</p> 
                             <span style={{fontSize:'15px',color:'#a5b2c3'}}>schedule Last checked: October 24, 2023, 10:45 AM</span>
                            </div>    
                        </div>
                        <button><RotateCw size={20}/> Check for Updates</button>
                    </div>
                    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                        <div style={{display:'flex',alignItems:'flex-start',gap:'10px'}}><span style={{color:'var(--primary)',marginTop:'5px'}}><Settings size={20}/></span><h4>Configuration</h4></div>
                        <div className="box" style={{flexDirection:'column'}}>
                            <div className="toggle-box">
                                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                    <div style={{backgroundColor:'#f8fafc',color:'#94a3b8',width:'40px',height:'40px',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}><RotateCw size={20}/></div>
                                    <div>
                                        <h5>Auto-update System</h5>
                                        <p style={{color:'#94a3b8'}}>Automatically download and install updates when available.</p>
                                    </div>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                            <div className="toggle-box">
                                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                                    <div style={{backgroundColor:'#f8fafc',color:'#94a3b8',width:'40px',height:'40px',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}><BellRing size={20}/></div>
                                    <div>
                                        <h5>Update Notifications</h5>
                                        <p style={{color:'#94a3b8'}}>Get notified about new features and major releases.</p>
                                    </div>
                                </div>
                                <div className="toggle-switch active"></div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',flexDirection:'column',width:'100%'}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'5px',justifyContent:'center'}}>
                                <span style={{color:'var(--primary)',marginTop:'5px'}}><NotebookPen size={20}/></span>
                                <h4>Release Notes</h4>
                            </div>
                            <div style={{cursor:'pointer',color:'var(--primary)'}}>View All History</div>
                            </div>
                        <div className="box" style={{flexDirection:'column',alignItems:'flex-start'}}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                               <h4>v2.4.0</h4>
                               <div style={{color:'#64748b',backgroundColor:'#f1f5f9',width:'max-content',padding:'2px 10px',borderRadius:'10px'}}>October 20, 2023</div> 
                            </div>
                            <p style={{letterSpacing:'1',color:'var(--primary)',fontWeight:'500',fontSize:'18px'}}>IMPROVEMENTS</p>
                            <p style={{color:'#475569'}}>• Enhanced dashboard loading speed by 40% through lazy loading implementation.</p>
                            <p style={{color:'#475569'}}>• New dark mode palette for better contrast in low-light environments.</p>
                            <p style={{letterSpacing:'1',color:'#9caabd'}}>BUG FIXES</p>
                            <p style={{color:'#475569'}}>• Fixe a crash when exporting large CSV project files.</p>
                        </div>
                    </div>
                    <div className="box" style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                            <h4>v2.3.5</h4>
                            <div style={{color:'#919cac',backgroundColor:'#f3f6f9',width:'max-content',padding:'2px 10px',borderRadius:'10px'}}>September 12, 2023</div>
                        </div>
                        <p style={{color:'#919cac'}}>Minor performance patches and security updates.</p>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
};
export default SystemUpdate;