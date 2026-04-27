import { useState } from "react";
import SidebarImg from "../../assets/images/sidebarlogo.png";
import "./workSpaceStyle.css";
import { CheckCircle2, ChevronDown, File, Folder, IdCardIcon, PlusCircleIcon, Settings, UserPlus,} from "lucide-react";
import CreateNewSpace from "./CreateNewSpace";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SidebarofWorkspace = () => {
  const [openNavItem, setOpenNavItem] = useState(null);
  const [openCreateSpace, setOpenCreateSpace] = useState(false);
  const navigate = useNavigate();
  return (
//     <div>
//       <aside className="workspace-sidebar">
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             gap: "10px",
//             padding: "0 20px",
//           }}
//         >
//           <img src={SidebarImg} />
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               justifyContent: "center",
//             }}
//           >
//             <h4 style={{ marginBottom: "0" }}>Design system</h4>
//             <p style={{ color: "#94a3b8", marginTop: "0" }}>WORKSPACE</p>
//           </div>
//         </div>
//         <div className="spaces">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "0 20px",
//               color: "#94a3b8",
//               marginBottom:'0'
//             }}
//           >
//             <p>S P A C E S</p>
//             <span style={{ fontSize: "5px",cursor:'pointer'}} onClick={()=>setOpenCreateSpace(true)}>
//               <PlusCircleIcon />
//             </span>
//           </div>
//           <nav className="sidebar-nav">
//             <NavLink to={'/spaceoverview'} className={({isActive})=> isActive? "active":" "}>
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setOpenNavItem(openNavItem === "product" ? null : "product");
//               }}
//             >
              
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap:'3px'
//                 }}
//               >
//                 <span>
//                   <Folder size={16}/>
//                 </span>
//                  Product Design
//               </div>
//               <span>
//                 <ChevronDown size={16}/>
//               </span>
//             </div>
//             </NavLink>
//             {openNavItem === "product" && (
//                <div className="dropdown-list">
//                 <div><span><CheckCircle2 size={16}/></span>Tasks</div>
//                 <div><span><File size={16}/></span>Notes</div>
//                 <div><span><IdCardIcon size={16}/></span>Files</div>
//               </div>
//             )}
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setOpenNavItem(openNavItem === "research" ? null : "research");
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap:'3px'
//                 }}
//               >
//                 <span>
//                   <Folder size={16}/>
//                 </span>
//                  User Research
//               </div>
//               <span>
//                 <ChevronDown size={16}/>
//               </span>
//             </div>
//             {openNavItem === "research" && (
//               <div className="dropdown-list">
//                 <div><span><CheckCircle2 size={16}/></span>Tasks</div>
//                 <div><span><File size={16}/></span>Notes</div>
//                 <div><span><IdCardIcon size={16}/></span>Files</div>
//               </div>
//             )}
//           </nav>
//         </div>
//         <div className="sidebar-footer">
//          <NavLink 
//   to="/workspaceSettings" 
//   end
//   className={({ isActive }) =>
//     isActive ? "active-item" : "normal-item"
//   }
// >
//           <div
//             style={{
//               color: "#475569",
//               fontSize: "20px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-start",
//               gap: "10px",
//               paddingLeft: "10px",
//               cursor:'pointer'
//             }}
//           >
//             <Settings size={20}/> Settings
//           </div>
//           </NavLink>
//           <button>
//             <UserPlus size={20}/> Invite Members
//           </button>
//         </div>
//       </aside>
//         {openCreateSpace && <CreateNewSpace openCreateSpace={openCreateSpace} setOpenCreateSpace={setOpenCreateSpace}/>}
//     </div>
    <div className="sidebar-of-ws">
      <aside className="workspace-sidebar">
      {/* Header: Workspace Info */}
      <div className="sidebar-header">
      <img src={SidebarImg} alt="Workspace Icon" />
      <div className="workspace-details">
      <h4>Design system</h4>
      <p>WORKSPACE</p>
      </div>
      </div>
  {/* Main Content: Spaces */}
      <div className="spaces-container">
      <div className="spaces-header">
      <p className="section-title">SPACES</p>
      <div className="add-space-btn" onClick={() => setOpenCreateSpace(true)}>
      <PlusCircleIcon size={18} />
      </div>
      </div>

    <nav className="sidebar-nav">
      {/* Product Design Item */}
      <div className={`nav-group ${openNavItem === "product" ? "is-open" : ""}`}>
          <div className="nav-item" >
          <div className="nav-label" onClick={() =>{  console.log('gh');navigate('/spaceoverview')}}>
            <Folder size={18} />
            <span>Product Design</span>
          </div>
          <ChevronDown size={16} className="chevron-icon" onClick={(e)=> {e.stopPropagation();setOpenNavItem(openNavItem === "product" ? null : "product")}}/>
        </div>
        
        {openNavItem === "product" && (
          <div className="dropdown-list">
            <div className="dropdown-item"><CheckCircle2 size={16} /><span>Tasks</span></div>
            <div className="dropdown-item"><File size={16} /><span>Notes</span></div>
            <div className="dropdown-item"><IdCardIcon size={16} /><span>Files</span></div>
          </div>
        )}
      </div>

      {/* User Research Item */}
      <div className={`nav-group ${openNavItem === "research" ? "is-open" : ""}`}>
        <div className="nav-item" onClick={() => setOpenNavItem(openNavItem === "research" ? null : "research")}>
          <div className="nav-label">
            <Folder size={18} />
            <span>User Research</span>
          </div>
          <ChevronDown size={16} className="chevron-icon" />
        </div>

        {openNavItem === "research" && (
          <div className="dropdown-list">
            <div className="dropdown-item"><CheckCircle2 size={16} /><span>Tasks</span></div>
            <div className="dropdown-item"><File size={16} /><span>Notes</span></div>
            <div className="dropdown-item"><IdCardIcon size={16} /><span>Files</span></div>
          </div>
        )}
      </div>
    </nav>
  </div>

  {/* Footer: Settings & Invite */}
  <div className="sidebar-footer">
    <NavLink to="/workspaceSettings" className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>
      <Settings size={20} />
      <span>Settings</span>
    </NavLink>
    <button className="invite-btn">
      <UserPlus size={20} />
      <span>Invite Members</span>
    </button>
  </div>
</aside>
     {openCreateSpace && <CreateNewSpace openCreateSpace={openCreateSpace} setOpenCreateSpace={setOpenCreateSpace}/>}

    </div>
  );
};
export default SidebarofWorkspace;
