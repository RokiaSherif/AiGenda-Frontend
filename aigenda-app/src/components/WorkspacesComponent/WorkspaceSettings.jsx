import SidebarofWorkspace from "./SidebarofWorkspace";
import "../../components/HomeComponent/home.css";
import { PlusIcon, Trash2 } from "lucide-react";
import IconImg from "../../assets/images/Background.png";
import IconImg1 from "../../assets/images/Background1.png";
import IconImg2 from "../../assets/images/Background2.png";
import PersonImg from "../../assets/images/Alex Morgan.png";
import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@workspace.com",
    role: "Admin",
    status: "Active",
    avatar: PersonImg,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@workspace.com",
    role: "Member",
    status: "Active",
    avatar: PersonImg,
  },
];

const WorkspaceSettings = ({ openCreateSpace }) => {
  const [actvBtn, setActvBtn] = useState({
    wsActivity:false,
    members:false,
  });  
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (id, newRole) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: newRole } : user)),
    );
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div className="app-container">
      <SidebarofWorkspace />
      <div className="main-container" style={{ marginLeft: "150px" }}>
        <h1 style={{ marginBottom: "0" }}>Workspace Settings</h1>
        <p style={{ color: "#64748B", marginTop: "0" }}>
          Manage your workspace configuration, team members, and preferences.
        </p>
        <div className="general-box">
          <h4>General</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5px",
                width: "50%",
              }}
            >
              <label>Workspace Name</label>
              <input defaultValue={"Design System"} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5px",
                width: "50%",
              }}
            >
              <label>Workspace URL</label>
              <input defaultValue={"design-system"} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "5px",
              width: "95%",
            }}
          >
            <label>Description</label>
            <textarea
              defaultValue={
                "A central hub for our brand guidelines, UI components, and creative assets."
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: "95%",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "#5e2ec4",
                color: "white",
                border: "none",
                width: "141px",
                height: "40px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
        <div className="spaces-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4>Manage Spaces</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
                textAlign: "center",
                color: "#888af4",
              }}
            >
              <span
                onClick={() => {}}
                style={{ cursor: "pointer", marginTop: "5px" }}
              >
                <PlusIcon size={16} />
              </span>
              <span>New Space</span>
            </div>
          </div>
          <div className="box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img src={IconImg} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <span>Tech requirements</span>
                <span style={{ color: "#a6afbd" }}>Updated 2 days ago</span>
              </div>
            </div>
            <div className="buttons">
              <button>Rename</button>
              <button>Archive</button>
            </div>
          </div>
          <div className="box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img src={IconImg1} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <span>Project management</span>
                <span style={{ color: "#a6afbd" }}>Updated 4 days ago</span>
              </div>
            </div>
            <div className="buttons">
              <button>Rename</button>
              <button>Archive</button>
            </div>
          </div>
          <div className="box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img src={IconImg2} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <span>Marketing Assets</span>
                <span style={{ color: "#a6afbd" }}>Updated 1 week ago</span>
              </div>
            </div>
            <div className="buttons">
              <button>Rename</button>
              <button>Archive</button>
            </div>
          </div>
        </div>
        <div className="members-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h4>Members Access</h4>
            <button
              style={{
                backgroundColor: "#5e2ec4",
                color: "white",
                border: "none",
                width: "141px",
                height: "40px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Invite Member
            </button>
          </div>
         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
  
  {/* Table Header */}
  <thead>
    <tr style={{ backgroundColor: '#f8fafc' }}>
      <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>USER</th>  
      <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ROLE</th>
      <th style={{ padding: '16px 24px', fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STATUS</th>
      <th style={{ padding: '16px 24px' }}></th>
    </tr>
  </thead>
  
  {/* Table Body */}
  <tbody>
    {users.map((user, index) => (
      <tr key={user.id} style={{ 
        backgroundColor: '#ffffff',
        borderBottom: index === users.length - 1 ? 'none' : '1px solid #f1f5f9' 
      }}>
        
        {/* User Cell */}
        <td style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img 
              src={user.avatar} 
              alt={user.name} 
              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <span style={{ fontWeight: '600', color: '#0f172a', fontSize: '14px' }}>{user.name}</span>
              <span style={{ fontSize: '13px', color: '#64748b' }}>{user.email}</span>
            </div>
          </div>
        </td>
        
        {/* Role Cell */}
        <td style={{ padding: '16px 24px' }}>
          <select 
            value={user.role} 
            onChange={(e) => handleRoleChange(user.id, e.target.value)}
            style={{ 
              padding: '8px 32px 8px 12px', 
              borderRadius: '6px', 
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#334155',
              fontSize: '14px',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none', 
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 8px center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.2em 1.2em'
            }}
          >
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
        </td>
        
        {/* Status Cell */}
        <td style={{ padding: '16px 24px' }}>
          <span style={{ 
            backgroundColor: '#dcfce7', 
            color: '#15803d', 
            padding: '4px 12px', 
            borderRadius: '9999px', 
            fontSize: '12px', 
            fontWeight: '600' 
          }}>
            {user.status}
          </span>
        </td>
        
        {/* Actions Cell */}
        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
          <button 
            onClick={() => handleDelete(user.id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '4px' }}
            aria-label={`Delete ${user.name}`}
          >
            <Trash2 size={18} strokeWidth={1.5} />
          </button>
        </td>

      </tr>
    ))}
  </tbody>
         </table>
        </div>
        <div className="notifications-box">
          <h4>Notifications</h4>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',marginBottom:'15px',borderTop:'1px solid #e2e8f0',paddingTop:'5px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <span>Workspace Activity</span>
                <span style={{color:'#64748b'}}>Notify everyone when new tasks or notes are created.</span>
            </div>
             <div onClick={(prev)=>{setActvBtn({...prev, wsActivity:!actvBtn.wsActivity})}} className={actvBtn.wsActivity ? "toggle-switch active" :"toggle-switch"}></div>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',marginBottom:'15px',borderTop:'1px solid #e2e8f0',paddingTop:'5px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <span>Members Updates</span>
                <span style={{color:'#64748b'}}>Alert admins when members join or leave the workspace.</span>
            </div>
            <div onClick={(prev)=>{setActvBtn({...prev, members:!actvBtn.members})}} className={actvBtn.members ? "toggle-switch active" :"toggle-switch"}></div>
          </div>
        </div>
        <div className="danger-zone">
          <h4 style={{ color: "#dc2626" }}>Danger Zone</h4>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "2px solid #feeaea",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h4 style={{ margin: "0" }}>Archive Workspace</h4>
              <p style={{ margin: "0", color: "#a6afbd" }}>
                This will hide the workspace from all members. Data will be kept
                for 30 days.
              </p>
            </div>
            <button
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                height: "38px",
                width: "160px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Archive Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkspaceSettings;
