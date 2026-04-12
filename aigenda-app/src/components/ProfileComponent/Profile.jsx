import Header from '../HomeComponent/Header';
import '../HomeComponent/home.css';
import Sidebar from '../HomeComponent/Sidebar';
import './profile.css';
const Profile = () =>{
    return (
        <div className="app-container">
            <Sidebar/>
              <main className="main-content" style={{marginLeft:'120px'}}>
      <Header/>
      <div className="page-container">
        <div className="profile-layout">
          <div className="profile-card">
            <img src="https://picsum.photos/seed/user/200/200" className="profile-avatar-large"/>
            <h2 className="profile-name">Eman Tweeg</h2>
            <p className="profile-email">eman.tweeg@example.com</p>
            <div style={{display: "flex", gap: "1rem", width: "100%"}}>
              <button style={{flex: "1", padding: "0.75rem", background: "var(--primary-soft)", color: "var(--primary)", border:" none", borderRadius: "1rem", fontWeight:" 700", cursor: "pointer"}}>Change Photo</button>
              <button style={{padding: "0.75rem", background:" var(--bg-main)", color: "#EF4444", border: "none", borderRadius:" 1rem", cursor: "pointer"}}><i data-lucide="trash-2"></i></button>
            </div>
          </div>

          <div className="profile-form">
            <h3 style={{fontSize: "1.5rem", fontWeight: "700"}}>Profile Settings</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" value="Eman Tweeg" onChange={()=>{}}/>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" value="eman.tweeg@example.com" onChange={()=>{}}/>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-input" value="+1 234 567 890" onChange={()=>{}}/>
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" className="form-input" value="San Francisco, CA" onChange={()=>{}}/>
              </div>
              <div className="form-group" style={{gridColumn: "span 2"}}>
                <label className="form-label">Bio</label>
                <textarea className="form-input" style={{height: "100px", resize: "none"}} defaultValue="Product Designer and AI enthusiast. Passionate about creating minimalist tools for deep work."></textarea>
              </div>
            </div>
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </main>
        </div>
    )
} 
export default Profile;