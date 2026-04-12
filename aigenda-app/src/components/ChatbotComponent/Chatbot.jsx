import { Bell, MessageSquare, Mic, Plus, Rocket, RotateCcw, Send, ThumbsDown, ThumbsUp, Image } from "lucide-react";
import Sidebar from "../HomeComponent/Sidebar";
import './chat.css';
import '../HomeComponent/home.css';
import { useEffect } from "react";
const Chatbot = ()=>{
    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
    return(
        <div className="app-container">
        <Sidebar/>
        <main className="main-content" style={{marginLeft:'130px'}}>
        <header className="header">
        <div className="header-left">
          <button className="control-btn" style={{marginRight: "1rem"}}><i data-lucide="chevron-left"></i></button>
          <button style={{display:"flex" ,alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "1px solid rgba(124, 58, 237, 0.2)", background: "transparent", color: "var(--primary)" , borderRadius: "1rem", fontWeight: "700" , cursor: "pointer"}}>
            <Plus/>
            <span>New Chat</span>
          </button>
        </div>
        <div className="header-right">
          <button className="notification-btn"><Bell/><span className="notification-dot"></span></button>
        </div>
      </header>

      <div className="chatbot-container">
        <aside className="chat-sidebar">
          <div className="history-section">
            <h4 className="history-label">YESTERDAY</h4>
            <a href="#" className="history-item"><MessageSquare/><span>Platform Marketplace 101</span></a>
            <a href="#" className="history-item"><MessageSquare/><span>Give me a proposal for company...</span></a>
            <a href="#" className="history-item"><MessageSquare/><span>Can you write a short paragraph f...</span></a>
          </div>
          <div className="history-section">
            <h4 className="history-label">LAST WEEK</h4>
            <a href="#" className="history-item"><MessageSquare/><span>Research about ui ux</span></a>
            <a href="#" className="history-item"><MessageSquare/><span>Give me a proposal for company...</span></a>
          </div>
          
          <div className="upgrade-card">
            <h4>Upgrade to PRO</h4>
            <p>Unlock premium features for free.</p>
            <button className="upgrade-btn">TRY NOW</button>
            <Rocket style={{position: "absolute", bottom: "-0.5rem", right: "-0.5rem", width: "4rem", height: "4rem", color: "var(--primary)", opacity:" 0.1", transform: "rotate(-12deg)"}}/>
          </div>
        </aside>

        <main className="chat-main">
          <div className="chat-history">
            {/* <!-- User Message --> */}
            <div className="message message-user">
              <img src="https://picsum.photos/seed/user/40/40" className="user-avatar" style={{marginTop: "0.5rem"}}/>
              <div className="message-bubble">
                <p>The advantages of Artificial Intelligence</p>
              </div>
            </div>

            {/* <!-- Bot Message --> */}
            <div className="message message-bot">
              <div style={{width: "2.5rem", height:" 2.5rem", background:" var(--primary-soft)", borderRadius: "9999px", display: "flex", alignitems: "center", justifyContent: "center", marginTop: "0.5rem"}}>
                <img src="https://picsum.photos/seed/bot/32/32" style={{width: "2rem", height: "2rem", borderRadius: "9999px"}}/>
              </div>
              <div className="message-bubble">
                <p style={{marginBottom: "1rem"}}>Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:</p>
                <ol style={{paddingLeft: "1.5rem", display: "flex", flexDirection:"column", gap: "1rem"}}>
                  <li><strong>Automation:</strong> AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency.</li>
                  <li><strong>Decision-making:</strong> AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis.</li>
                </ol>
                <div style={{display: "flex", justifyContent: "flex-end", gap: "1rem", margintop: "1.5rem", paddingTop: "1rem", borderTop:" 1px solid var(--border-color)"}}>
                  <button className="control-btn"><ThumbsUp/></button>
                  <button className="control-btn"><ThumbsDown/></button>
                </div>
              </div>
            </div>

            {/* <!-- Suggestions --> */}
            <div style={{display: "flex", flexWrap:" wrap", justifyContent: "center", gap: "0.75rem", margintop: "2rem"}}>
              <button style={{display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "white", border: "1px solid rgba(124, 58, 237, 0.2)", borderRadius: "1rem", color: "var(--text-muted)", fontWeight: "700", cursor: "pointer"}}>
                <RotateCcw style={{color: "var(--primary)", width: "1rem", height: "1rem"}}/>
                <span>Regenerate response</span>
              </button>
              <button style={{padding: "0.75rem 1.5rem", background: "rgba(124, 58, 237, 0.6)", color: "white", border: "none", borderRadius: "1rem", fontWeight: "700", cursor: "pointer"}}>Make Response Shorter</button>
              <button style={{padding: "0.75rem 1.5rem", background: "rgba(124, 58, 237, 0.8)", color: "white", border: "none", borderRadius: "1rem", fontWeight: "700", cursor: "pointer"}}>Explain it to me like a lawyer</button>
              <button style={{padding: "0.75rem 1.5rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "1rem", fontWeight: "700", cursor: "pointer"}}>Tell me about more</button>
            </div>
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <button className="control-btn"><Image/></button>
              <input type="text" placeholder="Type your message here..." className="chat-input"/>
              <div style={{display: "flex", gap: "0.5rem"}}>
                <button className="control-btn"><Mic/></button>
                <button style={{width: "3rem", height: "3rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "var(--shadow-primary)"}}>
                  <Send/>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
        </div>
    )
};
export default Chatbot;