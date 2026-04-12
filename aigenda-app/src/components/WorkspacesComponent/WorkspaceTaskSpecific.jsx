import { CalendarDays, ChevronRightIcon, Flag, Folder, Image, Maximize, Plus, Share2, Trash2, User2 } from "lucide-react";
import SidebarofWorkspace from "./SidebarofWorkspace"
import './stylesofWS.css';
import { useState } from "react";
import UpdateTask from './UpdateTask';
import DeleteTask from "./DeleteTask";
const WorkspaceTaskSpecific = ()=>{
    const[updateTask, setUpdateTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);
    return(
        <div className="app-container">
            <SidebarofWorkspace/>
          <div className="main-content" style={{marginLeft:'130px'}}>
              <div className="task-details-wrapper">
      {/* HEADER ROW */}
      <div className="task-top-header">
        <div className="breadcrumbs">
          <span>Product Design</span>
          <span><ChevronRightIcon/></span>
          <span>Tasks</span>
          <span><ChevronRightIcon/></span>
          <span className="active">Redesign Checkout...</span>
        </div>
        <div className="header-actions">
          <button className="btn">
            <span aria-hidden="true"><Share2 size={16}/></span> Share
          </button>
          <button className="btn btn-delete" onClick={()=>setDeleteTask(true)}>
            <span aria-hidden="true"><Trash2 size={16}/></span> Delete
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="task-content-grid">
        
        {/* LEFT COLUMN: TASK CONTENT */}
        <div className="task-main-col">
          
          {/* Header Info */}
          <div className="task-header-info">
            <div className="task-status-row">
              <div className="status-badge">
                <div className="status-dot"></div>
                ON PROGRESS
              </div>
              <span className="task-id">#TSK-1042</span>
            </div>
            <h1 className="task-title">Redesign Checkout Flow for Mobile Devices</h1>
          </div>

          {/* Description */}
          <div className="task-description">
            <h3 className="section-label">DESCRIPTION</h3>
            <p>
              The current mobile checkout flow has a high drop-off rate at the shipping 
              information stage. We need to streamline the process by implementing a 
              progress indicator and simplifying input fields.
            </p>
            <ul>
              <li>Focus on single-column layout</li>
              <li>Optimize for one-handed operation</li>
              <li>Ensure compliance with the new Design System accessibility standards</li>
            </ul>
          </div>

          {/* Subtasks */}
          <div className="task-subtasks">
            <div className="subtasks-header">
              <h3 className="section-label" style={{ marginBottom: 0 }}>SUBTASKS</h3>
              <span className="subtasks-progress-text">25% Complete</span>
            </div>
            
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '25%' }}></div>
            </div>

            <div className="subtasks-list">
              {/* Completed Subtask */}
              <div className="subtask-item">
                <div className="subtask-left">
                    <input type="checkbox" className="subtask-checkbox"/>
                  {/* <div className="subtask-checkbox checked">
                    <span className="check-mark">✓</span>
                  </div> */}
                  <span className="subtask-text completed">
                    Analyze current mobile flow and identify friction points
                  </span>
                </div>
              </div>

              {/* Pending Subtask with Assignee */}
              <div className="subtask-item">
                <div className="subtask-left">
                  {/* <div className="subtask-checkbox"></div> */}
                  <input type="checkbox" className="subtask-checkbox"/>
                  <span className="subtask-text">
                    Create wireframes for simplified address input
                  </span>
                </div>
                <img 
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
                  alt="Assignee" 
                  className="subtask-avatar"
                />
              </div>

              {/* Pending Subtask */}
              <div className="subtask-item">
                <div className="subtask-left">
                  {/* <div className="subtask-checkbox"></div> */}
                  <input type="checkbox" className="subtask-checkbox checked"/>
                  <span className="subtask-text">
                    Design high-fidelity mockups in Figma
                  </span>
                </div>
              </div>
            </div>

            <button className="add-subtask-btn" onClick={()=>setUpdateTask(true)}>
              <span><Plus size={16}/></span> Add Subtask
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR METADATA */}
        <div className="task-sidebar-card">
          
          {/* Metadata Grid */}
          <div>
            <h3 className="section-label">METADATA</h3>
            <div className="metadata-list">
              <div className="metadata-row">
                <span className="metadata-label"><span className="metadata-icon"><User2 size={16}/></span> Assignee</span>
                <div className="metadata-value">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Alex Rivera" className="assignee-avatar" />
                  Alex Rivera
                </div>
              </div>
              <div className="metadata-row">
                <span className="metadata-label"><span className="metadata-icon"><CalendarDays size={16}/></span> Due Date</span>
                <span className="metadata-value due-date">Nov 24, 2023</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-label"><span className="metadata-icon"><Flag size={16}/></span> Priority</span>
                <span className="priority-badge">Low</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-label"><span className="metadata-icon"><Maximize size={16}/></span> Space</span>
                <span className="metadata-value space">Design System</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="section-label">TAGS</h3>
            <div className="tags-list">
              <span className="tag-pill">UI/UX</span>
              <span className="tag-pill">Mobile</span>
              <button className="add-tag-btn"><Plus size={16}/>Add Tag</button>
            </div>
          </div>

          {/* Attachments */}
          <div>
            <h3 className="section-label">ATTACHMENTS</h3>
            <div className="attachments-list">
              <div className="attachment-item">
                <span className="file-icon pdf"><Folder size={16}/></span> User_Journey.pdf
              </div>
              <div className="attachment-item">
                <span className="file-icon img"><Image size={16}/></span> ui_ireframe_V1.png
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
          </div>
          {updateTask && <UpdateTask updateTask={updateTask} setUpdateTask={setUpdateTask}/>}
          {deleteTask && <DeleteTask deleteTask={deleteTask} setDeleteTask={setDeleteTask}/>}
        </div>
    )
};
export default WorkspaceTaskSpecific;