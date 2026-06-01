import {Info, KeyRound, Laptop, Monitor, ShieldCheck, Smartphone, Tv2Icon } from "lucide-react";
import SettSidebar from "./SettSidebar";
import { useState } from "react";

const SettSecurity = ()=>{
    const[openToggle, setOpenToggle] = useState(false);
    return(
        <div className="app-container">
            <div className="main-content">
                <SettSidebar/>
                <div className="page-container">
                    <div className="security-container">
                        <div>
                          <h2>Security Settings</h2>
                          <p>Manage your password, account verification, and active sessions.</p>
                        </div>
                        <div className="password-sec">
                            <div style={{fontSize:'20px',fontWeight:'600',display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{marginTop:'5px',color:'var(--primary)'}}><KeyRound size={20}/></span> Password</div>
                            <div className="box">
                                <div>
                                <h4>Update your password</h4>
                                <p style={{color:'var(--text-soft)'}}>Last changed 3 months ago. We recommend a unique, long password.</p>
                                </div>
                                <button>Change Password</button>
                            </div>
                        </div>
                        <div className="Auth-sec">
                            <div style={{fontSize:'20px',fontWeight:'600',display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{marginTop:'5px',color:'var(--primary)'}}><ShieldCheck size={20}/></span> Two-Factor Authentication</div>
                            <div className="box">
                                <div>
                                <div className="header-toggle" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <h4>Secure your account with 2FA</h4>
                                 <div onClick={()=>{setOpenToggle(!openToggle)}} className={openToggle?"toggle-switch active":"toggle-switch"}>
                                </div>
                                </div>
                                <p style={{color:'var(--text-soft)'}}>Two-factor authentication adds an extra layer of security to your account. In addition to your password, you'll need to enter a code from an authenticator app.</p>
                                <div className="buttons">
                                <button>Download Backup Codes</button> 
                                <button>Change Method</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="sessions">
                            <div id="header" style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                                <div style={{fontSize:'20px',fontWeight:'600',display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{marginTop:'5px',color:'var(--primary)'}}><Tv2Icon size={20}/></span> Active Sessions</div>
                                <div style={{cursor:'pointer',color:'#ef4444',border:'1px solid #ef4444',backgroundColor:'#f8f8f8',padding:'5px',borderRadius:'5px'}}>Log out of all sessions</div>
                            </div>
                            <div className="box">
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                                <div style={{color:'#64748b',backgroundColor:'#ebf5ff',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}><Laptop size={20}/></div>
                                <div>
                                <div className="connection" style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <h4>MacBook Pro 16"</h4>
                                <div style={{width:'max-content',padding:'0px 5px',borderRadius:'5px',letterSpacing:'1px',color:'#32b060',backgroundColor:'#dcfce7'}}>Current Device</div>    
                                </div>
                                <p style={{color:'#64748b'}}>Chrome • San Francisco, USA • 192.168.1.1</p>   
                                </div>  
                                </div>
                                <div id="last" style={{color:'#64748b'}}>Connected</div>
                            </div>
                            <div className="box">
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                                <div style={{color:'#64748b',backgroundColor:'#ebf5ff',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}><Smartphone size={20}/></div>
                                <div>
                                <h4>iPhone 15 Pro</h4>
                                <p style={{color:'#64748b'}}>iOS App • New York, USA • 172.16.254.1</p>   
                                </div>  
                                </div>
                            </div>
                            <div className="box">
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                                <div style={{color:'#64748b',backgroundColor:'#ebf5ff',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}><Monitor size={20}/></div>
                                <div>
                                <h4>Windows Workstation</h4>
                                <p style={{color:'#64748b'}}>Firefox • London, UK • 10.0.0.45</p>   
                                </div>  
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div style={{width:'40px',maxWidth:'40px',height:'40px',backgroundColor:'#e9e1f7',color:'#5900ca',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'15px'}}><Info size={20}/></div>
                            <div>
                                <h4>Not recognizing a session?</h4>
                                <p>If you see a device or location that you don't recognize, we recommend changing your password immediately and revoking all active sessions to secure your account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SettSecurity;