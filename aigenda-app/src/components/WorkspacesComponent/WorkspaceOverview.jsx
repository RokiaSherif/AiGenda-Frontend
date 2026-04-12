import { Bell, Calendar, ChevronLeftIcon, ChevronRightIcon, Plus } from "lucide-react";
import SidebarofWorkspace from "./SidebarofWorkspace";
import './stylesofWS.css';
import TasksImg from '../../assets/images/tasksimg.png';
import FocustimeImg from '../../assets/images/focustimeimg.png';
import SpacesImg from '../../assets/images/spacesimg.png';
import ProductivityImg from '../../assets/images/productivityimg.png';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const recentActivities = [
  { 
    id: 1, 
    description: <>Task completed in <strong>Product Design</strong></>, 
    time: '2 mins ago', 
    color: '#10b981' 
  },
  { 
    id: 2, 
    description: <>New note added by <strong>Maria</strong></>, 
    time: '45 mins ago', 
    color: '#8b5cf6'
  },
  { 
    id: 3, 
    description: <>File uploaded: <strong>user-flow-v2.fig</strong></>, 
    time: '3 hours ago', 
    color: '#3b82f6' 
  },
  { 
    id: 4, 
    description: <>Weekly sync meeting scheduled</>, 
    time: 'Yesterday', 
    color: '#e2e8f0'
  },
];

const WorkspaceOverview = () => {
  return (
    <div className="app-container">
      <SidebarofWorkspace />
      <div className="main-container" style={{marginLeft:'140px',marginTop:'0'}}>

        <div className="top-sec">
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span><ChevronLeftIcon/></span>
                    <span><ChevronRightIcon/></span>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <h2 style={{marginBottom:'0'}}>Good Morning, Alex.</h2>
                    <p style={{marginTop:'0'}}>You're <span style={{color:'#46c79c'}}>12% more productive</span> this week.</p>
                </div>
            </div>
          <div className="header-right">
          <button className="notification-btn">
            <Bell />
            <span className="notification-dot"></span>
          </button>
        </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <p style={{color:'#b0bbca'}}>TOTAL TASKS</p>
              <img src={TasksImg} alt="task image"/>
            </div>
            <h1>24</h1>
            <p style={{color:'#46c79c'}}>4 new today</p>
          </div>
          <div className="box">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <p style={{color:'#b0bbca'}}>FOCUS TIME</p>
              <img src={FocustimeImg} alt="focus time image"/>
            </div>
            <h1>5.2h</h1>
            <p style={{color:'#b0bbca',fontSize:'15px'}}>Average 4.8h/day</p>
          </div>
          <div className="box">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <p style={{color:'#b0bbca'}}>ACTIVE SPACES</p>
              <img src={SpacesImg} alt="spaces image"/>
            </div>
            <h1>3</h1>
            <p style={{color:'#b0bbca',fontSize:'15px'}}>2 active collaborators</p>
          </div>
          <div className="box">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <p style={{color:'#b0bbca'}}>PRODUCTIVITY SCORE</p>
              <img src={ProductivityImg} alt="productivity image"/>
            </div>
            <h1>88</h1>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '75%',backgroundColor:'#46c79c' }}></div>
            </div>
          </div>
        </div>
        <div className="widgets-grid">
              {/* LEFT CARD: Weekly Focus Time */}
              <div className="widget-card">
                <div className="focus-header">
                  <h2 className="widget-title">Weekly Focus Time</h2>
                  <button className="time-filter-btn">Last 7 Days</button>
                </div>

                {/* Blank area for future chart (e.g., Recharts) */}
                <div className="focus-chart-area">
                  <div className="focus-x-axis">
                    {daysOfWeek.map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CARD: Recent Activity */}
              <div className="widget-card">
                <h2 className="widget-title">Recent Activity</h2>
                
                <div className="activity-list">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                      <div 
                        className="activity-indicator" 
                        style={{ backgroundColor: activity.color }} 
                      />
                      {/* The text content */}
                      <div className="activity-text-group">
                        <p className="activity-desc">{activity.description}</p>
                        <p className="activity-time">{activity.time}</p>
                      </div>
                      
                    </div>
                  ))}
                </div>

                <a href="#all-activity" className="view-all-link">
                  View all activity
                </a>
              </div>
        </div>
        <div className="priority-tasks">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
            <h4>Priority Tasks</h4>
            <div style={{display:'flex',alignItems:'center',color:'#5f17bf',gap:'8px',fontWeight:'500'}}>
              <span style={{cursor:'pointer',marginTop:'5px'}}><Plus size={16}/></span>
              <span>New Task</span>
            </div>
          </div>
           <div className="box">
              <input type="checkbox"/>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <p style={{marginBottom:'1px'}}>Refine mobile navigation architecture</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginTop:'1px'}}>
                  <div style={{backgroundColor:'#fff1f2',color:'red',width:'130px',height:'25px',fontSize:'14px',borderRadius:'8px'}}>HIGH PRIORITY</div>
                  <div style={{color:'#b4bfcd',display:'flex',gap:'5px'}}><span><Calendar size={15}/></span><span>Today</span></div>
                </div>
              </div>
              
            </div>
           <div className="box">
              <input type="checkbox"/>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <p style={{marginBottom:'1px'}}>Draft stakeholder presentation</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginTop:'1px'}}>
                  <div style={{backgroundColor:'#eff6ff',color:'blue',width:'130px',height:'25px',fontSize:'14px',borderRadius:'8px'}}>PRODUCT DESIGN</div>
                  <div style={{color:'#b4bfcd',display:'flex',gap:'5px'}}><span><Calendar size={15}/></span><span>Tomorrow</span></div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
};
export default WorkspaceOverview;
