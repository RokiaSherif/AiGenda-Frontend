import { useState } from "react";
import SidebarImg from "../../assets/images/sidebarlogo.png";
import "./workSpaceStyle.css";
import {
  CheckCircle2,
  ChevronDown,
  File,
  Folder,
  IdCardIcon,
  PlusCircleIcon,
  Settings,
  UserPlus,
} from "lucide-react";
import CreateNewSpace from "./CreateNewSpace";
import { NavLink } from "react-router-dom";
const SidebarofWorkspace = () => {
  const [openNavItem, setOpenNavItem] = useState(null);
  const [openCreateSpace, setOpenCreateSpace] = useState(false);
  return (
    <div>
      <aside className="workspace-sidebar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
            padding: "0 20px",
          }}
        >
          <img src={SidebarImg} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h4 style={{ marginBottom: "0" }}>Design system</h4>
            <p style={{ color: "#94a3b8", marginTop: "0" }}>WORKSPACE</p>
          </div>
        </div>
        <div className="spaces">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              color: "#94a3b8",
              marginBottom:'0'
            }}
          >
            <p>S P A C E S</p>
            <span style={{ fontSize: "5px",cursor:'pointer'}} onClick={()=>setOpenCreateSpace(true)}>
              <PlusCircleIcon />
            </span>
          </div>
          <nav className="sidebar-nav">
            <NavLink to={'/spaceoverview'} className={({isActive})=> isActive? "active":" "}>
            <div
              className="nav-item"
              onClick={() => {
                setOpenNavItem(openNavItem === "product" ? null : "product");
              }}
            >
              
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap:'3px'
                }}
              >
                <span>
                  <Folder size={16}/>
                </span>
                 Product Design
              </div>
              <span>
                <ChevronDown size={16}/>
              </span>
            </div>
            </NavLink>
            {openNavItem === "product" && (
               <div className="dropdown-list">
                <div><span><CheckCircle2 size={16}/></span>Tasks</div>
                <div><span><File size={16}/></span>Notes</div>
                <div><span><IdCardIcon size={16}/></span>Files</div>
              </div>
            )}
            <div
              className="nav-item"
              onClick={() => {
                setOpenNavItem(openNavItem === "research" ? null : "research");
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap:'3px'
                }}
              >
                <span>
                  <Folder size={16}/>
                </span>
                 User Research
              </div>
              <span>
                <ChevronDown size={16}/>
              </span>
            </div>
            {openNavItem === "research" && (
              <div className="dropdown-list">
                <div><span><CheckCircle2 size={16}/></span>Tasks</div>
                <div><span><File size={16}/></span>Notes</div>
                <div><span><IdCardIcon size={16}/></span>Files</div>
              </div>
            )}
          </nav>
        </div>
        <div className="sidebar-footer">
         <NavLink 
  to="/workspaceSettings" 
  end
  className={({ isActive }) =>
    isActive ? "active-item" : "normal-item"
  }
>
          <div
            style={{
              color: "#475569",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              paddingLeft: "10px",
              cursor:'pointer'
            }}
          >
            <Settings size={20}/> Settings
          </div>
          </NavLink>
          <button>
            <UserPlus size={20}/> Invite Members
          </button>
        </div>
      </aside>
        {openCreateSpace && <CreateNewSpace openCreateSpace={openCreateSpace} setOpenCreateSpace={setOpenCreateSpace}/>}
    </div>
  );
};
export default SidebarofWorkspace;
