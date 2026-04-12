import Header from "../HomeComponent/Header";
import SidebarofWorkspace from "./SidebarofWorkspace";
import TopSection from "./TopSection";
import './stylesofWS.css';
import '../HomeComponent/home.css';
import { Link } from "react-router-dom";
// --- MOCK DATA ---
const tasksData = [
  {
    id: 1,
    title: 'Improve Navigation & Menu Organization',
    isCompleted: true,
    progress: { status: 'Ongoing', color: '#0f172a', icon: '🔄' },
    urgency: { level: 'Moderate', color: '#f59e0b' },
    assignees: ['https://i.pravatar.cc/150?u=12']
  },
  {
    id: 2,
    title: 'Speed Optimization for Home Page',
    isCompleted: false,
    progress: { status: 'Ongoing', color: '#8b5cf6', icon: '🔄' },
    urgency: { level: 'Critical', color: '#ef4444' },
    assignees: ['https://i.pravatar.cc/150?u=13', 'https://i.pravatar.cc/150?u=14']
  },
  {
    id: 3,
    title: 'Introduce AI-powered Task Prioritization',
    isCompleted: true,
    progress: { status: 'Completed', color: '#10b981', icon: '✓' },
    urgency: { level: 'Moderate', color: '#f59e0b' },
    assignees: ['https://i.pravatar.cc/150?u=15']
  },
  {
    id: 4,
    title: 'Multi-language Support Implementation',
    isCompleted: true,
    progress: { status: 'Completed', color: '#10b981', icon: '✓' },
    urgency: { level: 'Critical', color: '#ef4444' },
    assignees: ['https://i.pravatar.cc/150?u=16', 'https://i.pravatar.cc/150?u=17']
  }
];

const notesData = [
  {
    id: 1,
    type: 'text',
    title: 'New Product Idea Design',
    icon: '💡',
    content: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.'
  },
  {
    id: 2,
    type: 'image',
    title: 'New Product Idea Design',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80',
    content: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.'
  },
  {
    id: 3,
    type: 'list',
    title: 'Monthly Buy List',
    icon: '🛒',
    items: [
      { id: 1, text: 'Item 1', isSubItem: false },
      { id: 2, text: 'Sub item 1', isSubItem: true },
      { id: 3, text: 'Sub item 2', isSubItem: true },
      { id: 4, text: 'Item 2', isSubItem: false },
    ]
  }
];

const SpaceOverview = () =>{
    return(
        <div className="app-container">
            <SidebarofWorkspace/>
            <div className="main-content" style={{marginLeft:'150px'}}>
            <Header/>
            <div className="page-container">
                <TopSection/>
<div className="tasks-notes-wrapper">
      
      {/* LEFT COLUMN: TASKS */}
      <div className="section-card">
        
        {/* Controls Header */}
        <div className="tasks-header-controls">
          <div className="view-toggle">
            <button className="toggle-btn active">
              <span>≡</span> List
            </button>
            <button className="toggle-btn">
              <span>◫</span> Board
            </button>
          </div>
          <button className="add-btn">+</button>
        </div>

        {/* Task Table */}
        <table className="task-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Progress</th>
              <th>Urgency</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task) => (
              <tr key={task.id}>
                {/* Feature Column with Checkbox */}
                <td>
                  <div className="task-feature-cell">
                    <div className={`custom-checkbox ${task.isCompleted ? 'checked' : ''}`}>
                      {task.isCompleted && <span className="check-icon">✓</span>}
                    </div>
                    <span>{task.title}</span>
                  </div>
                </td>
                
                {/* Progress Column */}
                <td>
                  <div className="status-badge" style={{ color: task.progress.color }}>
                    <span>{task.progress.icon}</span> {task.progress.status}
                  </div>
                </td>

                {/* Urgency Column */}
                <td>
                  <div className="urgency-badge">
                    <span style={{ color: task.urgency.color }}>ill</span> {task.urgency.level}
                  </div>
                </td>

                {/* Assigned To Column */}
                <td>
                  <div className="avatar-group">
                    {task.assignees.map((avatar, index) => (
                      <img key={index} src={avatar} alt="Assignee" className="avatar-img" />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Link */}
         <Link to={'/workspaceTasks'}>
          <button className="view-all-tasks-btn">view all tasks</button>
         </Link>
      </div>

      {/* RIGHT COLUMN: RECENT NOTES */}
      <div className="notes-container" >
        <div className="section-header-flex">
          <h2 className="notes-header">Recent notes</h2>
          <a href="#all-notes" className="notes-link">view all</a>
        </div>

        <div className="notes-list">
          {notesData.map((note) => (
            <div key={note.id} className="note-card">
              
              <div className="note-title-wrap">
                <span className="note-icon">{note.icon}</span>
                <h3 className="note-title">{note.title}</h3>
              </div>

              {/* Conditional Rendering based on Note Type */}
              {note.type === 'text' && (
                <p className="note-text">{note.content}</p>
              )}

              {note.type === 'image' && (
                <>
                  <img src={note.image} alt="Note Attachment" className="note-image" />
                  <p className="note-text">{note.content}</p>
                </>
              )}

              {note.type === 'list' && (
                <div className="note-checklist">
                  {note.items.map((item) => (
                    <div key={item.id} className={`checklist-item ${item.isSubItem ? 'sub-item' : ''}`}>
                      <input type="checkbox"/>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

    </div>
            </div>


            </div>
        </div>
    );
};
export default SpaceOverview;