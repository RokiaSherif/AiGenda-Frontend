import { ArrowLeft, Bell, HelpCircle, Info, LogOut, Mail, Monitor, RefreshCcw, Shield, Smartphone, UserPlus } from "lucide-react";
import Header from "../HomeComponent/Header";
import Sidebar from "../HomeComponent/Sidebar";
import '../HomeComponent/home.css';
import './settings.css';
import { useEffect } from "react";
import SettSidebar from "./SettSidebar";

const Settings = () =>{
        useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, []);
    return (
        <div className="app-container">
            <Sidebar/>
             <main className="main-content" style={{marginLeft:'120px'}}>
      <Header/>

      <div className="settings-layout">
        <SettSidebar/>
        <main className="settings-main">
          <div style={{maxWidth: "56rem", margin: "0 auto"}}>
            <div style={{marginBottom: "3rem"}}>
              <h2 style={{fontSize: "2rem", fontWeight: "700", marginBottom: "0.5rem"}}>Notifications Settings</h2>
              <p style={{color:" var(--text-muted)"}}>manage how and when you recieve alerts form our app</p>
            </div>

            <div className="toggle-group">
              <div className="toggle-info">
                <div className="toggle-icon"><Smartphone style={{width: "2rem", height: "2rem"}}/></div>
                <div><h3 style={{fontSize: "1.25rem", fontWeight: "700"}}>Push Notifications</h3><p style={{fontSize: "0.875rem", color: "var(--text-muted)"}}>recieve all new alerts via emails</p></div>
              </div>
              <div className="toggle-switch active"></div>
            </div>

            <div className="toggle-group">
              <div className="toggle-info">
                <div className="toggle-icon"><Mail style={{width: "2rem", height: "2rem"}}/></div>
                <div><h3 style={{fontSize: "1.25rem", fontWeight: "700"}}>Email Notifications</h3><p style={{fontSize: "0.875rem", color:" var(--text-muted)"}}>get instant alerts on your mobile device</p></div>
              </div>
              <div className="toggle-switch active"></div>
            </div>

            <div className="toggle-group">
              <div className="toggle-info">
                <div className="toggle-icon"><Monitor style={{width: "2rem", height: "2rem"}}/></div>
                <div><h3 style={{fontSize: "1.25rem", fontWeight: "700"}}>Desktop Alerts</h3><p style={{fontSize: "0.875rem", color: "var(--text-muted)"}}>show notification popups on your work station</p></div>
              </div>
              <div className="toggle-switch"></div>
            </div>

            <div className="settings-card" style={{marginTop: "3rem", borderRadius: "3rem"}}>
              <h3 style={{fontSize: "1.25rem", fontWeight: "700", marginBottom: "2.5rem"}}>Delivery Schdule</h3>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr" ,gap: "2.5rem"}}>
                <div className="form-group">
                  <label className="form-label">notification frequency</label>
                  <select className="form-input" style={{appearance: "none", backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundRepeat: "no-repeat", backgroundPosition:" right 1.5rem center", backgroundSize: "1rem"}}>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Real-time</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Quite Time</label>
                  <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <input type="text" className="form-input" value="01:00 pm" style={{flex: 1}} onChange={()=>{}}/>
                    <span style={{fontWeight: "700", color: "var(--text-soft)"}}>To</span>
                    <input type="text" className="form-input" value="09:00 am" style={{flex: 1}} onChange={()=>{}}/>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: '3rem', paddingTop: "2rem", borderTop:" 1px solid var(--border-color)"}}>
                <button style={{padding: "1rem 2.5rem", background: "var(--bg-main)", color: "var(--text-muted)", border: "none", borderRadius: "1.25rem", fontWeight: "700", cursor: "pointer"}}>Cancel</button>
                <button style={{padding: "1rem 2.5rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "1.25rem", fontWeight: "700", cursor: "pointer", boxShadow: "var(--shadow-primary)"}}>Save Changes</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
        </div>
    )
}
export default Settings;