import "./home.css";
import {StickyNote, Home, LayoutDashboard, Layers, Users, User, Link as LinkIcon, MessageSquare, Settings, LogOut} from 'lucide-react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = ()=>{
    return(
        <div>
            <aside className="sidebar">
                <div className="sidebar-logo">
            <div className="logo-icon">
              <StickyNote/>
            </div>
            <h1 className="logo-text">AiGenda</h1>
          </div>

          <nav className="sidebar-nav">
          <NavLink to='/home' className={({isActive})=> isActive? "nav-item active":"nav-item"} >
              <Home/>
              <span>Home</span>
              {/* <div className="active-indicator"></div> */}
            </NavLink>
            <NavLink to='/Mainworkspace' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <LayoutDashboard/>
              <span>Workspaces</span>
            </NavLink>
            <NavLink to='/analytics' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <Layers/>
              <span>Analytics</span>
            </NavLink>
            <NavLink to='/community' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <Users/>
              <span>Community</span>
            </NavLink >
            <NavLink to='/connect' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <LinkIcon/>
              <span>Connect</span>
            </NavLink>
            <NavLink to='/chatbot' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <MessageSquare/>
              <span>Chatbot</span>
            </NavLink>
            <NavLink to='/profile' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <User/>
              <span>Profile</span>
            </NavLink>
            <NavLink to='/settings' className={({isActive})=> isActive? "nav-item active":"nav-item"}>
              <Settings/>
              <span>Settings</span>
            </NavLink>
          </nav>

             <div className="sidebar-footer">
            <div className="user-profile">
              <img src="https://picsum.photos/seed/user/40/40" alt="User" className="user-avatar"/>
              <div className="user-info">
                <span className="user-name">Rokia Sherif</span>
                <span className="user-plan">Pro Plan</span>
              </div>
            </div>
            <button className="logout-btn">
            <LogOut/>
              <span>Log out</span>
            </button>
             </div>
            </aside>
        </div>
    )
};
export default Sidebar;