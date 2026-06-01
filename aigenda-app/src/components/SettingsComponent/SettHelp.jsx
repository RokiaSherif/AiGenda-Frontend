import { ChevronDown, Code, Lightbulb, LinkIcon, Mail, ReceiptText, Search, ShieldCheck } from "lucide-react";
import SettSidebar from "./SettSidebar";
import { useState } from "react";

const askedQuestion = [
    {id:1, Q:'How do I reset my account password?', answers:`Go to Account Settings > Security, then select 'Change Password'. Enter your current password and create a new one. If you've forgotten your password, use the 'Forgot Password' option on the login page.`},
    {id:2, Q:'How to invite team members to my workspace?', answers:`Navigate to Workspace Settings and click 'Invite Members'. Enter your teammates' email addresses, assign their roles, and send the invitation. They will receive an email with instructions to join your workspace.`},
    {id:3, Q:'What integrations are currently supported?', answers:`Our platform supports integrations with popular tools such as Google Calendar, Slack, Microsoft Teams, Zoom, and GitHub. Additional integrations are added regularly to improve your workflow.`},
    {id:4, Q:'Can I export my data to a CSV file?', answers:`Yes. You can export your data by going to the Reports or Data Management section and selecting 'Export to CSV'. The exported file can be used for reporting, analysis, or backup purposes.`},
];

const SettHelp = ()=>{
      const [openIndex, setOpenIndex] = useState(null);
    return(
        <div className="app-container">
            <div className="main-content">
                <SettSidebar/>
                <div className="page-container">
                    <div className="help-container">
                        <h2>How can we help?</h2>
                        <div className="search-container">
                            <div className="search-box">
                                <Search size={20}/>
                              <input placeholder="Search the knowledge base for answers..."/>  
                            </div>
                            <div className="popular-searches">
                                <p style={{color:'#94a3b8'}}>Popular Searches:</p>
                                <div>API Keys</div>
                                <div>Billing Cycle</div>
                                <div>Team permissions</div>
                            </div>
                        </div>
                        <div className="categories">
                            <h4>Popular Help Categories</h4>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))',gap:'10px',width:"100%"}}>
                                <div className="box">
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'50px',height:'50px',color:'var(--primary-light)',backgroundColor:'#ebe0f8',borderRadius:'10px'}}><ShieldCheck/></div>
                                    <h5 style={{marginBottom:'0'}}>Security</h5>
                                    <p style={{marginTop:'0'}}>2FA, session management and data privacy.</p>
                                </div>
                                <div className="box">
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'50px',height:'50px',color:'var(--primary-light)',backgroundColor:'#ebe0f8',borderRadius:'10px'}}><Lightbulb/></div>
                                    <h5 style={{marginBottom:'0'}}>Productivity Tips</h5>
                                    <p style={{marginTop:'0'}}>Maximize your workflow with power-user tricks.</p>
                                </div>
                                <div className="box">
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'50px',height:'50px',color:'var(--primary-light)',backgroundColor:'#ebe0f8',borderRadius:'10px'}}><ReceiptText/></div>
                                    <h5 style={{marginBottom:'0'}}>Billing Help</h5>
                                    <p style={{marginTop:'0'}}>Invoices, payment methods, and plan upgrades.</p>
                                </div>
                                <div className="box">
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'50px',height:'50px',color:'var(--primary-light)',backgroundColor:'#ebe0f8',borderRadius:'10px'}}><Code/></div>
                                    <h5>API Docs</h5>
                                    <p style={{marginTop:'0'}}>Technical resources and endpoint guides.</p>
                                </div>
                            </div>
                        </div>
                        <div className="asked-question">
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                            <h4>Frequently Asked Questions</h4>
                            <p style={{color:'var(--primary)',cursor:'pointer'}}>View all FAQ</p>
                            </div>
                            {askedQuestion.map((Q)=>(
                                <div className="faq-item" key={Q.id}>
                                <div
                                className="faq-header"
                                onClick={() => setOpenIndex(openIndex === Q.id ? null: Q.id)}
                                >
                                <h3>{Q.Q}</h3>
                                <ChevronDown
                                className={openIndex === Q.id ? "rotate" : ""}
                                />
                                </div>
                                {openIndex === Q.id && (
                                <div className="faq-content">
                                {Q.answers}
                                </div>
                                )}
                                </div>
                                ))}
                        </div>
                        <div className="footer">
                            <h2 style={{color:'white'}}>Still need help?</h2>
                            <p style={{color:'var(--text-color-muted)',width:'50%'}}>Can't find what you're looking for? Our friendly support team is available 24/7 to assist you with any questions.</p>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                              <button style={{backgroundColor:'var(--primary)'}}><Mail size={20}/> Contact Support</button>  
                              <button style={{backgroundColor:'black'}}><LinkIcon size={20}/> Join Community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SettHelp;