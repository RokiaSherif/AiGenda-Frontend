import Header from "../HomeComponent/Header";
import "../HomeComponent/home.css";
import TopSection from "./TopSection";
import "./workspace.css";
import Avtar1 from "../../assets/images/avatar1.jpg";
import Avtar2 from "../../assets/images/avatar2.jpg";
import { Clock, HeartIcon, MoreVertical, PinIcon, Plus, PlusCircleIcon } from "lucide-react";
import SidebarofWorkspace from "./SidebarofWorkspace";
import { useState } from "react";
import CreateNote from "./CreateNote";
import ImgNote from "./ImgNote";
import VoiceNote from "./VoiceNote";
import HeaderOfWS from "./HeaderOfWS";
const SpaceNotes = () => {
  const [openCreateNote, setOpenCreateNote] = useState(false);
  const [openNoteType, setOpenNoteType] = useState({
    voice:false,
    image:false
  });
  return (
    <div className="app-container">
      <SidebarofWorkspace />
      <main className="main-content" style={{ marginLeft: "130px",boxSizing:'border-box' }}>
        <HeaderOfWS />
        <div className="page-container" style={{position:'relative'}}>
          <TopSection />
          <button onClick={()=>{setOpenCreateNote(true)}}>
            <span><PlusCircleIcon/></span>
            Create Note</button>
          <div className="notes-container">
            <div className="note-box">
              <div className="inside-box">
                <div className="top-section">
                  <div style={{ backgroundColor: "#dbeafe", color: "#2563eb" }}>
                    UX RESEARCH
                  </div>
                  <button>
                    <MoreVertical />
                  </button>
                </div>
                <h2>Color Palette Accessibility Review</h2>
                <p>
                  Gathered references for the "Digital
                  <br />
                  Innovation" section. Focus on
                  <br />
                  glassmorphism, depth, and vibrant…
                </p>
                
                <div className="bottom-section">
                  <div>
                    <span>
                      <Clock />
                    </span>
                    Edited 5h ago
                  </div>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="note-box image">
              <img src={Avtar1} />
              <div className="inside-box">
                <div className="top-section">
                  <div style={{ backgroundColor: "#fef3c7", color: "#d97706" }}>
                    ASSETS
                  </div>
                  <button>
                    <MoreVertical />
                  </button>
                </div>
                <h2>New Icon Set Library</h2>
                <p>
                  We are moving towards a more
                  <br />
                  rounded icon aesthetic. These should
                  <br />
                  be 24px default with a 1.5pt stroke…
                </p>
                

                <div className="bottom-section">
                  <div>
                    <span>
                      <Clock />
                    </span>
                    Edited 5h ago
                  </div>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="note-box">
              <div className="inside-box">
                <div className="top-section">
                  <div style={{ backgroundColor: "#d1fae5", color: "#059669" }}>
                    TYPOGRAPHY
                  </div>
                  <button>
                    <PinIcon/>
                  </button>
                </div>
                <h2>Developer Handoff Protocal </h2>
                <p>
                  Gathered references for the "Digital
                  <br />
                  Innovation" section. Focus on
                  <br />
                  glassmorphism, depth, and vibrant…
                </p>
                

                <div className="bottom-section">
                  <div>
                    <span>
                      <Clock />
                    </span>
                    Edited 5h ago
                  </div>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="note-box">
              <div className="inside-box">
                <div className="top-section">
                  <div style={{ backgroundColor: "#f3e8ff", color: "#9333ea" }}>
                    WORKFLOW
                  </div>
                  <button>
                    <MoreVertical />
                  </button>
                </div>
                <h2>Developer Handoff Protocal </h2>
                <p>
                  Gathered references for the "Digital
                  <br />
                  Innovation" section. Focus on
                  <br />
                  glassmorphism, depth, and vibrant…
                </p>
                

                <div className="bottom-section">
                  <div>
                    <span>
                      <Clock />
                    </span>
                    Edited 5h ago
                  </div>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="note-box image">
              <img src={Avtar2} />
              <div className="inside-box">
                <div className="top-section">
                  <div style={{ backgroundColor: "#ffe4e6", color: "#e11d48" }}>
                    IDEATION
                  </div>
                  <button>
                    <MoreVertical />
                  </button>
                </div>
                <h2>Landing Page Moodboard </h2>
                <p>
                  Gathered references for the "Digital
                  <br />
                  Innovation" section. Focus on
                  <br />
                  glassmorphism, depth, and vibrant…
                </p>

                <div className="bottom-section">
                  <div>
                    <span>
                      <Clock />
                    </span>
                    Edited 5h ago
                  </div>
                  <button>
                    <HeartIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="note-box create" style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
                <button><PlusCircleIcon/></button>
              <h4 style={{color:'#475569',marginBottom:'0'}}>Create new note</h4>
              <h5 style={{color:'#94A3B8',marginTop:'0'}}>Capture ideas instantly</h5>
            </div>
          </div>
        </div>
      </main>
      {openCreateNote && <CreateNote openCreateNote={openCreateNote} setOpenCreateNote={setOpenCreateNote} setOpenNoteType={setOpenNoteType} openNoteType={openNoteType}/>}
      {openNoteType.voice && <VoiceNote setOpenNoteType={setOpenNoteType} openNoteType={openNoteType}/>}
      {openNoteType.image && <ImgNote setOpenNoteType={setOpenNoteType} openNoteType={openNoteType}/>}
    </div>
  );
};
export default SpaceNotes;
