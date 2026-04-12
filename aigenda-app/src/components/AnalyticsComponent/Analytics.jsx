import "./analytics.css";
import "../HomeComponent/home.css";
import Sidebar from "../HomeComponent/Sidebar";
import { ArrowUpRight, Bell, Calendar, ChevronLeft, ChevronRight, Download, LayoutDashboard, Search } from "lucide-react";
const Analytics = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content" style={{marginLeft:'120px'}}>
        <header className="header">
          <div className="header-left">
            <div className="nav-controls">
              <button className="control-btn">
                <ChevronLeft/></button>
              <button className="control-btn">
                <ChevronRight/>
              </button>
            </div>
            <div className="search-bar">
              <Search style={{position:'absolute',left:'8px',top:'8px',zIndex:'3'}} size={20}/>
              <input
                type="text"
                placeholder="Search..."
                className="search-input" style={{position:'relative'}}
              />
            </div>
          </div>
          <div className="header-right">
            <div style={{display: "flex", gap: "0.75rem", marginRight: "1rem"}}>
              <div style={{display: "flex", alignItems: "center", gap: "0.5rem", background: "white", padding: "0.5rem 1rem", borderRadius: "0.75rem", boxShadow: "var(--shadow-sm)", fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: "500"}}>
                <Calendar style={{width: "1rem", height: "1rem"}}/>
                <span>Last 30 Days</span>
              </div>
              <button style={{display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--primary)", color: "white", padding: "0.5rem 1rem", borderRadius: "0.75rem", border: "none", fontSize: "0.875rem", fontWeight: "500", cursor: "pointer", boxShadow: "var(--shadow-primary)"}}>
                <Download style={{width: "1rem", height: "1rem"}} />
                <span>Export Report</span>
              </button>
            </div>
            <button className="notification-btn">
              <Bell/>
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        <div className="page-container">
          <div className="dashboard-grid">
            {/* <!-- Task Completion --> */}
            <div className="db-card">
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                <div>
                  <h3 style={{fontSize: "1.875rem", fontWeight: "700"}}>35/50</h3>
                  <p style={{color: "var(--text-muted)", fontSize: "0.875rem"}}>Tasks Completed </p>
                </div>
                <div style={{textAlign: "right"}}>
                  <span style={{fontSize: "2.25rem", fontWeight: "700"}}>67%</span>
                  <p style={{color:" var(--text-soft)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase"}}>Jan</p>
                </div>
              </div>
              <div className="progress-circle">
                <svg width="160" height="160">
                  <circle cx="80" cy="80" r="70" className="bg" />
                  <circle cx="80" cy="80" r="70" className="fg" />
                </svg>
                <div className="progress-text">
                  <span className="val">67%</span>
                  <span className="label">Progress</span>
                </div>
              </div>
            </div>

            {/* <!-- Focus Sessions --> */}
            <div className="db-card"style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <h3 style={{fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem"}}>
                12 Focus sessions this week
              </h3>
              <p style={{color: "var(--text-muted)", marginBottom: "1.5rem"}}> 12 h - Total focus time </p>
              <div style={{display: "flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: "600", fontSize: "0.875rem"}}>
                <ArrowUpRight style={{width:"1rem", height: "1rem"}}/>
                <span>18% tasks completed during focus</span>
              </div>
            </div>

            {/* <!-- Status Breakdown --> */}
            <div className="db-card">
              <h3 style={{fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem"}}>Tasks Status Breakdown </h3>
              <div style={{height: "160px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {/* <!-- Simple SVG Pie Chart --> */}
                <svg width="120" height="120" viewBox="0 0 32 32">
                  <circle r="16" cx="16" cy="16" fill="#F1F5F9" />
                  <circle r="16"cx="16" cy="16" fill="transparent" stroke="#22C55E" stroke-width="32" stroke-dasharray="50 100"/>
                  <circle r="16"cx="16" cy="16" fill="transparent" stroke="#3B82F6" stroke-width="32"stroke-dasharray="40 100" stroke-dashoffset="-50"/>
                  <circle r="16" cx="16" cy="16" fill="transparent" stroke="#EF4444" stroke-width="32" stroke-dasharray="6 100" stroke-dashoffset="-90"/>
                  <circle r="12" cx="16" cy="16" fill="white" />
                </svg>
              </div>
              <div className="status-breakdown">
                <div className="status-item">
                  <div className="status-dot"style={{background: "#22C55E"}}></div>
                  <span>Completed</span>
                </div>
                <div className="status-item">
                  <div className="status-dot" style={{background: "#3B82F6"}}></div>
                  <span>In Progress</span>
                </div>
                <div className="status-item">
                  <div className="status-dot"style={{background: "#94A3B8"}}></div>
                  <span>To Do</span>
                </div>
                <div className="status-item">
                  <div className="status-dot"style={{background: "#EF4444"}}></div>
                  <span>Over Due</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem"}}>
            {/* <!-- Productivity Trend --> */}
            <div className="db-card">
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem"}}>
                <div>
                  <h3 style={{fontSize: "1.125rem", fontWeight: "700"}}>Productivity is improving by 12%</h3>
                  <p style={{color: "var(--text-soft)", fontSize: "0.875rem"}}>Weekly progress overview</p>
                </div>
                <ArrowUpRight style={{color: "var(--primary)", width: "1.5rem", height: "1.5rem"}}/>
              </div>
              <div className="chart-area">
                <svg width="100%" height="100%" viewBox="0 0 600 250" preserveAspectRatio="none">
                  <line x1="0" y1="200" x2="600" y2="200" className="chart-grid-line"/>
                  <line x1="0" y1="150" x2="600" y2="150" className="chart-grid-line"/>
                  <line x1="0" y1="100" x2="600" y2="100" className="chart-grid-line"/>
                  <line x1="0" y1="50" x2="600" y2="50" className="chart-grid-line"/>
                  <path d="M0,180 Q100,200 200,120 T400,80 T600,100 V250 H0 Z" className="chart-area-fill"/>
                  <path d="M0,180 Q100,200 200,120 T400,80 T600,100" className="chart-line"/>
                </svg>
                <div style={{display:"flex",justifycontent: "space-between", marginTop: "1rem", fontSize: "0.75rem", color: "var(--text-soft)"}}>
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span><span>Week 7</span>
                </div>
              </div>
            </div>

            {/* <!-- Insight Card --> */}
            <div className="insight-card">
              <div className="insight-icon">
                <LayoutDashboard style={{width:"2rem", height: "2rem"}}/>
              </div>
              <h3>You complete more tasks on days with focus sessions longer than 30 minutes</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Analytics;
