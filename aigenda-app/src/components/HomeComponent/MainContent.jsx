import { ChevronLeft, ChevronRight, LayoutDashboard, MoreHorizontal } from "lucide-react";

const MainContent = ()=>{
    return(
        <>
        
      {/* <!-- Page Specific Content (HomeView) --> */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Hi Rokia!</h2>
            <p>welcome back, you have <span>5 taskes</span> left for today!</p>
          </div>
          <div className="bot-avatar">
            <img src="https://picsum.photos/seed/bot/64/64" alt="Bot"/>
          </div>
        </section>

        <section>
          <h3 className="section-title">Work spaces</h3>
          <div className="workspaces-grid">
            <div className="workspace-card">
              <div className="accent accent-blue"></div>
              <div className="workspace-header">
                <h4 className="workspace-name">project analysis</h4>
                <button className="control-btn"><MoreHorizontal/></button>
              </div>
              <p className="workspace-footer">project analysis</p>
            </div>
            <div className="workspace-card">
              <div className="accent accent-purple"></div>
              <div className="workspace-header">
                <h4 className="workspace-name">Ai uni</h4>
                <button className="control-btn"><MoreHorizontal/></button>
              </div>
              <p className="workspace-footer">Ai uni</p>
            </div>
            <div className="workspace-card">
              <div className="accent accent-orange"></div>
              <div className="workspace-header">
                <h4 className="workspace-name">Robotics</h4>
                <button className="control-btn"><MoreHorizontal/></button>
              </div>
              <p className="workspace-footer">Robotics</p>
            </div>
            <div className="workspace-card">
              <div className="accent accent-emerald"></div>
              <div className="workspace-header">
                <h4 className="workspace-name">SS analysis</h4>
                <button className="control-btn"><MoreHorizontal/></button>
              </div>
              <p className="workspace-footer">SS analysis</p>
            </div>
          </div>
        </section>

        <div className="dashboard-layout">
          <section className="stats-card">
            <div style={{display:'flex', justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem"}}>
              <h3 className="section-title" style={{marginBottom: "0"}}>Statistics</h3>
              <div style={{display: "flex", alignItems: "center", gap:" 0.5rem", background: "white", padding: "0.375rem ,0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border-color)", fontSize: "0.875rem"}}>
                <button className="control-btn" style={{padding: "0.25rem"}}><ChevronLeft style={{width: "1rem", height: "1rem"}}/></button>
                <span style={{fontWeight: "500"}}>2022</span>
                <button className="control-btn" style={{padding: "0.25rem"}}><ChevronRight style={{width: "1rem", height: "1rem"}}/></button>
              </div>
            </div>
            {/* <!-- Chart Placeholder --> */}
            <div style={{height: "280px", display: "flex", alignItems: "center", justifyContent: "center", opacity: "0.1"}}>
              <LayoutDashboard style={{width: "8rem", height: "8rem"}}/>
            </div>
            <div style={{display: "flex", justifyContent:" space-between", fontSize: "0.75rem", color: "var(--text-soft)", marginTop: "1rem"}}>
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
            </div>
          </section>

          <section className="tasks-card">
            <h3 className="section-title">Tasks</h3>
            <div className="task-item">
              <span className="task-time">01:00</span>
              <div className="task-content">
                <h4 className="task-title">analysis</h4>
                <p className="task-subtitle">project analysis-design system</p>
              </div>
            </div>
            <div className="task-item">
              <span className="task-time">10:00</span>
              <div className="task-content" style={{borderLeftColor: "#F97316"}}>
                <h4 className="task-title">Platform Concept</h4>
                <p className="task-subtitle">Animation</p>
              </div>
            </div>
            <div className="task-item">
              <span className="task-time">13:00</span>
              <div className="task-content" style={{borderLeftColor: "#8B5CF6"}}>
                <h4 className="task-title">interoretation</h4>
                <p className="task-subtitle">Animation</p>
              </div>
            </div>
            <div className="task-item">
              <span className="task-time">05:00</span>
              <div className="task-content" style={{borderLeftColor: "#10B981"}}>
                <h4 className="task-title">hakoona</h4>
                <p className="task-subtitle">Animation</p>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h3 className="section-title">Recent notes</h3>
          <div className="notes-grid">
            <div className="note-card bg-blue-50">
              <h4 className="note-title">project analysis</h4>
              <p className="note-text">A kiddo who uses Bootstrap and Laravel in web development. Currently playing around</p>
            </div>
            <div className="note-card bg-yellow-50">
              <h4 className="note-title">project analysis</h4>
              <p className="note-text">A kiddo who uses Bootstrap and Laravel in web development. Currently playing around</p>
            </div>
            <div className="note-card bg-emerald-50">
              <h4 className="note-title">project analysis</h4>
              <p className="note-text">A kiddo who uses Bootstrap and Laravel in web development. Currently playing around</p>
            </div>
          </div>
        </section>
      
    </>
    )
};
export default MainContent;