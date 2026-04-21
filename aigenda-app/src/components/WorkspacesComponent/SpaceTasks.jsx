import { AlertCircle, Clock, Search, PlusCircle, Filter } from "lucide-react";
import '../HomeComponent/home.css';
import './workspace.css';
import Header from "../HomeComponent/Header";
import TopSection from "./TopSection";
import SidebarofWorkspace from "./SidebarofWorkspace";
import { useState } from "react";
import CreateNewTask from "./CreateNewTask";
import { Link } from "react-router-dom";
import HeaderOfWS from "./HeaderOfWS";
const SpaceTasks = ()=>{
  const [openCreateTask, setOpenCreateTask] = useState(false);
    return(
        <div className="app-container">
        <SidebarofWorkspace/>
        <main className="main-content" style={{marginLeft:"130px"}}>
       <HeaderOfWS/>
      <div className="page-container">
        <TopSection/>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem"}}>
          <div style={{display:"flex", gap: "1rem"}}>
            <div className="search-bar" style={{width: "16rem"}}>
              <Search style={{position:'absolute',left:'10',top:'10',zIndex:'3'}} size={18}/>
              <input type="text" placeholder="Search..." className="search-input" style={{position:'relative',background: "white", border: "1px solid var(--border-color)"}}/>
            </div>
            <button className="control-btn" style={{background: "white", border: "1px solid var(--border-color)", padding: "0.625rem",marginLeft:'80px'}}><Filter/></button>
          </div>
          <button onClick={()=>{setOpenCreateTask(true)}} style={{display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--primary)", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.75rem", border: "none", fontWeight: "600", cursor: "pointer", boxShadow: "var(--shadow-primary)"}}>
            <PlusCircle/>
            <span>Create Task</span>
          </button>
        </div>

        <div className="kanban-board">
          {/* <!-- Done Column --> */}
          <div className="kanban-column">
            <div className="column-header">
              <div className="column-dot" style={{background: "#22C55E"}}></div>
              <h3 className="column-title">Done</h3>
              <span className="column-count">2</span>
            </div>
            <div className="column-content column-done">
              <div className="task-card">
                <span className="task-status-tag tag-done">Completed</span>
                <h4 className="task-title">Schedule Post</h4>
                <p className="task-desc">schedule instagram post of duel & azure</p>
                <div className="task-footer">
                  <div className="task-avatars">
                    <img src="https://picsum.photos/seed/1/24/24"/>
                    <img src="https://picsum.photos/seed/2/24/24"/>
                  </div>
                  <div className="task-meta"><Clock/><span>1:00 pm</span></div>
                </div>
              </div>
              <div className="task-card">
                <span className="task-status-tag tag-done">Completed</span>
                <h4 className="task-title">Holi Post</h4>
                <p className="task-desc">Design Post for Holi</p>
                <div className="task-footer">
                  <div className="task-avatars"><img src="https://picsum.photos/seed/3/24/24"/></div>
                  <div className="task-meta"><Clock/><span>2:00 pm</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Progress Column --> */}
          <div className="kanban-column">
            <div className="column-header">
              <div className="column-dot" style={{background: "#F97316"}}></div>
              <h3 className="column-title">On progress</h3>
              <span className="column-count">2</span>
            </div>
            <div className="column-content column-progress">
              <Link to={'/workspacetaskspecific'}>
              <div className="task-card">
                <span className="task-status-tag tag-progress">Ongoing</span>
                <h4 className="task-title">Redesign checkout...</h4>
                <p className="task-desc">Redesign on re-branding of demo linked</p>
                <div className="progress-bar"><div className="progress-fill" style={{width:" 77%", background:" #F97316"}}></div></div>
                <div className="task-footer">
                  <div className="task-avatars"><img src="https://picsum.photos/seed/4/24/24"/></div>
                  <div className="task-meta"><span>77%</span></div>
                </div>
              </div>
              </Link>
              <div className="task-card">
                <span className="task-status-tag tag-progress">Ongoing</span>
                <h4 className="task-title">Change copies</h4>
                <p className="task-desc">Change copies of website</p>
                <div className="progress-bar"><div className="progress-fill" style={{width: "37%", background: "#F97316"}}></div></div>
                <div className="task-footer">
                  <div className="task-avatars"><img src="https://picsum.photos/seed/5/24/24"/></div>
                  <div className="task-meta"><span>37%</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- To Do Column --> */}
          <div className="kanban-column">
            <div className="column-header">
              <div className="column-dot" style={{background: "#EF4444"}}></div>
              <h3 className="column-title">To do</h3>
              <span className="column-count">3</span>
            </div>
            <div className="column-content column-todo">
              <div className="task-card">
                <span className="task-status-tag tag-todo">To Do</span>
                <h4 className="task-title">Re-branding Discussion</h4>
                <p className="task-desc">Discussion on re-branding of demo linked</p>
                <div className="task-footer">
                  <div className="task-avatars"><img src="https://picsum.photos/seed/6/24/24"/></div>
                  <div className="task-meta" style={{color: "#EF4444"}}><AlertCircle/><span>55 Min Left</span></div>
                </div>
              </div>
              <div className="task-card">
                <span className="task-status-tag tag-todo">To Do</span>
                <h4 className="task-title">Brainstorming</h4>
                <p className="task-desc">Brainstorming with team on clarity app</p>
                <div className="task-footer">
                  <div className="task-avatars"><img src="https://picsum.photos/seed/7/24/24"/></div>
                  <div className="task-meta" style={{color: "#EF4444"}}><AlertCircle/><span>12 Min Left</span></div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </main>
    {openCreateTask && <CreateNewTask openCreateTask={openCreateTask} setOpenCreateTask={setOpenCreateTask}/>}
        </div>
    )
};
export default SpaceTasks;