import SettSidebar from "./SettSidebar";
import "../HomeComponent/home.css";
import "./settings.css";
const SettAbout = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <SettSidebar />
        <div className="settings-layout">
          <div className="about">
            <div>OUR MISSION</div>
            <h3>AiGenda</h3>
            <p>AIgenda is designed as a minimalist tool to help you reclaim your concentration. By eliminating digital noise, it enables you to enter a state of deep work where your most important tasks receive the undivided attention they deserve</p>
            <p>Beyond simple task tracking, AIgenda’s philosophy is built around organized thinking. It offers a clean and flexible structure to map out ideas, helping users move from mental clutter to focused, streamlined productivity—without the friction of complex, traditional tools.</p>
          </div>
          <div className="AboutServices">
            <div id="servicesInfo">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Support</p>
            </div>
            <p>© 2024 FocusFlow Inc. Designed for clarity.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SettAbout;
