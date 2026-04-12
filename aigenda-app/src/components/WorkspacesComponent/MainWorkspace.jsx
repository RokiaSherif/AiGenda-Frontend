import {  CheckCircle2, PlusCircleIcon } from "lucide-react";
import Sidebar from "../HomeComponent/Sidebar";
import '../HomeComponent/home.css';
import './workspace.css';
import WebdesignImg from '../../assets/images/website design.png';
import codeImg from '../../assets/images/code windows.png';
import  megaphone  from '../../assets/images/megaphone marketing.png';
import AIImg from '../../assets/images/AiImg.png';
import BugImg from '../../assets/images/bug.png';
import ProImg from '../../assets/images/product.png';
import VoltImg from '../../assets/images/energy-ellipse.png';
import { Link } from "react-router-dom";
import CreateNewWorkspace from "./CreateNewWorkspace";
import { useState } from "react";
const MainWorkspace = ()=>{
    const [openDialog, setOpenDialog ] = useState(false);
    return(
        <div className="app-container">
           <Sidebar/>     
           <main className="main-content" style={{marginLeft:'160px'}}>
            <div className="workspace-the-top">
                <div>
                <h1 style={{marginBottom:'0',fontWeight:"900"}}>Workspaces</h1>
                <p style={{marginTop:'0',color:'#4c4c4c'}}>Manage your projects,tasks and notes in one place!</p>
                </div>
                <button style={{cursor:'pointer'}} onClick={()=>{setOpenDialog(true)}}>New Workspace</button>
            </div>
            <div className="page-container">
                  <div className="cards-container">
                    <Link to='/workspaceoverview'>
                <div className="card">
                    <img src={WebdesignImg}/>
                    <h4>Design system</h4>
                    <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                </Link>
                <div className="card">
                    <img src={codeImg}/>
                    <h4>Problem solving</h4>
                     <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                <div className="card">
                    <img src={megaphone}/>
                    <h4>Markting</h4>
                     <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                <div className="card">
                    <img src={AIImg}/>
                    <h4>Development</h4>
                     <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                <div className="card">
                    <img src={BugImg}/>
                    <h4>Second system</h4>
                     <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ProImg}/>
                    <h4>Pro system</h4>
                     <div>
                        <p>12 Members</p>
                        <p style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}><span style={{fontSize:'15px',marginTop:'auto'}}><CheckCircle2/></span>30 Tasks</p>
                    </div>
                </div>
                <div className="card add">
                    <button><PlusCircleIcon/></button>
                    <h5>Add workspace</h5>
                </div>
                  </div>
                 <div className="insights">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                        <img src={VoltImg}/>
                        <div>
                        <h2 style={{marginBottom:'0px'}}>Projects insights</h2>
                        <p style={{marginTop:'0px',color:'#616483'}}>Your teams is 15% more active this week than last</p>
                       </div>
                    </div>
                    <div style={{cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'25px',color:'#22236f',fontWeight:'700'}}>
                       <p>View reports</p>
                       <p>dismiss</p>
                    </div>
                </div>
            </div>
            {openDialog && <CreateNewWorkspace openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
           </main>
        </div>
    )
};
export default MainWorkspace;