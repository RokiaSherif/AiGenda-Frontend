import { Trash2 } from "lucide-react";
import './workSpaceStyle.css';
const DeleteTask = ({ deleteTask, setDeleteTask }) => {
  return (
    <div className="overlay" onClick={() => setDeleteTask(false)}>
      <div className="create-container delete-page" style={{width:'400px'}}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "#feeded",
              color: "#dc2727",
              width: "40px",
              height: "40px",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <Trash2 size={20} />
            </span>
          </div>
          <h2>DeleteTask?</h2>
        </div>
        <p style={{textAlign:'start'}}>
          Are you sure you want to delete this task? This action cannot be
          undone and the content will be permanently removed from your
          workspace.
        </p>
        <div className="buttons">
            <button style={{backgroundColor:'white',border:'2px solid #be88f5',cursor:'pointer'}} onClick={()=>setDeleteTask(false)}>Cancel</button>
            <button style={{backgroundColor:'red',color:'white',cursor:'pointer'}}>Delete Note</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteTask;
