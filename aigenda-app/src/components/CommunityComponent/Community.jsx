import { Search, UserPlus, Filter, MoreHorizontal, Globe, Star, Zap, MessageSquare } from 'lucide-react';
import Header from '../HomeComponent/Header';
import '../HomeComponent/home.css';
import Sidebar from '../HomeComponent/Sidebar';
import './community.css';
const Community = ()=>{
    return(
        <div className="app-container">
            <Sidebar/>
              <main className="main-content" style={{marginLeft:'130px'}}>
            <Header/>

      <div className="page-container">
        <div style={{  display: 'flex',  justifyContent: 'space-between',  alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h2 style={{fontSize: "2.25rem", fontWeight: "700", marginBottom: "0.5rem"}}>Community & Teams</h2>
            <p style={{color:" var(--text-muted)", fontSize: "1.125rem"}}>Collaborate with your team and join the global community</p>
          </div>
          <button style={{display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--primary)", color: "white", padding: "1rem 2rem", borderRadius: "1.25rem", border: "none", fontWeight: "700", cursor: "pointer", boxShadow: "var(--shadow-primary)"}}>
            <UserPlus/>
            <span>Create Team</span>
          </button>
        </div>

        <div className="community-layout">
          <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h3 style={{fontSize: "1.5rem", fontWeight: "700"}}>Active Teams</h3>
              <div style={{display: "flex", gap: "1rem"}}>
                <button className="control-btn" style={{background: "white", border: "1px solid var(--border-color)", padding:" 0.75rem"}}><Search/></button>
                <button className="control-btn" style={{background: "white", border: "1px solid var(--border-color)", padding:" 0.75rem"}}><Filter/></button>
              </div>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem"}}>
              <div className="team-card">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                  <img src="https://picsum.photos/seed/ds/80/80" className="team-avatar"/>
                  <button className="control-btn"><MoreHorizontal/></button>
                </div>
                <div style={{marginBottom: "2rem"}}>
                  <div className="team-title">Design System <div className="team-status"></div></div>
                  <p className="team-category">Design</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)"}}>
                  <div className="task-avatars">
                    <img src="https://picsum.photos/seed/m1/40/40"/>
                    <img src="https://picsum.photos/seed/m2/40/40"/>
                    <img src="https://picsum.photos/seed/m3/40/40"/>
                    <div style={{width: "2.5rem", height: "2.5rem", borderRadius: "9999px", background: "#F1F5F9", border:" 4px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.625rem", fontWeight: "700", color: "var(--text-soft)", marginLeft: "-0.75rem"}}>+8</div>
                  </div>
                  <button style={{padding: "0.625rem 1.5rem", background: "var(--primary-soft)", color: "var(--primary)", border: "none", borderRadius: "0.75rem", fontWeight: "700", cursor: "pointer"}}>Join</button>
                </div>
              </div>

              <div className="team-card">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flexStart"}}>
                  <img src="https://picsum.photos/seed/fe/80/80" className="team-avatar"/>
                  <button className="control-btn"><MoreHorizontal/></button>
                </div>
                <div style={{marginBottom: "2rem"}}>
                  <div className="team-title">Frontend Guild <div className="team-status"></div></div>
                  <p className="team-category">Engineering</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)"}}>
                  <div className="task-avatars">
                    <img src="https://picsum.photos/seed/m4/40/40"/>
                    <img src="https://picsum.photos/seed/m5/40/40"/>
                    <div style={{width: "2.5rem", height: "2.5rem", borderRadius: "9999px", background: "#F1F5F9", border: "4px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.625rem", fontWeight: "700", color: "var(--text-soft)", marginLeft: "-0.75rem"}}>+41</div>
                  </div>
                  <button style={{padding: "0.625rem 1.5rem", background: "var(--primary-soft)", color: "var(--primary)", border: "none", borderRadius: "0.75rem", fontWeight: "700", cursor: "pointer"}}>Join</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
            <div className="member-list">
              <h3 style={{fontSize: "1.25rem", fontWeight: "700", marginBottom: "2rem"}}>Active Members</h3>
              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">
                    <img src="https://picsum.photos/seed/alex/60/60"/>
                    <div className="member-status status-online"></div>
                  </div>
                  <div>
                    <h4 style={{fontWeight: "700"}}>Alex Rivera</h4>
                    <p style={{fontSize: "0.75rem", color: "var(--text-muted)"}}>Lead Designer</p>
                  </div>
                </div>
                <button className="control-btn"><MessageSquare/></button>
              </div>
              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">
                    <img src="https://picsum.photos/seed/sarah/60/60"/>
                    <div className="member-status status-busy"></div>
                  </div>
                  <div>
                    <h4 style={{fontWeight: "700"}}>Sarah Chen</h4>
                    <p style={{fontSize: "0.75rem", color: "var(--text-muted)"}}>Senior Developer</p>
                  </div>
                </div>
                <button className="control-btn"><MessageSquare/></button>
              </div>
              <button style={{width: "100%",padding: "1rem",background:" var(--bg-main)",border: "none",borderRadius: "1rem",color:" var(--text-muted)",fontWeight: "700",fontSize: "0.875rem",cursor: "pointer",marginTop: "1rem"}}>View all members</button>
            </div>

            <div className="global-card">
              <h3 style={{fontSize: "1.25rem",fontWeight: "700",marginBottom: "2rem"}}>Global Community</h3>
              <div className="global-stat">
                <div className="stat-icon" style={{color: "var(--primary)"}}><Globe/></div>
                <div><p className="stat-val">128k</p><p className="stat-label">Active Users</p></div>
              </div>
              <div className="global-stat">
                <div className="stat-icon" style={{color: "#F59E0B"}}><Star/></div>
                <div><p className="stat-val">4.9/5</p><p className="stat-label">User Rating</p></div>
              </div>
              <div className="global-stat">
                <div className="stat-icon" style={{color: "#10B981"}}><Zap/></div>
                <div><p className="stat-val">1.2M</p><p className="stat-label">Tasks Completed</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        </div>
    )
}
export default Community;