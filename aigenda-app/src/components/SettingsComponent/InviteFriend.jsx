import SettSidebar from "./SettSidebar";
import '../HomeComponent/home.css';
import './settings.css';
import { Copy, Link2, Mail, Plus, SendHorizonal, Users } from "lucide-react";
const invitationInfo = [
    {id:1, email:'sarah.j@designteam.com',sentDate:'Oct 24, 2023',action:'Resend'},
    {id:2, email:'mike.ross@legal.co',sentDate:'Oct 25, 2023',action:'Resend'}
]
const InviteFriend = ()=>{
    return(
        <div className="app-container">
            <div className="main-content">
                <SettSidebar/>
                <div className="page-container">
                    <div className="invitation-container">
                    <div className="invitation-title">
                        <div>
                        <h1>Invite your team</h1>
                        <p style={{width:'50%',color:'var(--text-main)'}}>Work better together by inviting your teammates to join your workspace. Collaboration is the key to unlocking your team's peak productivity.</p>     
                        </div>
                        <div className="icon-box">
                        <Users/>
                        <div><Plus/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                        <p style={{marginTop:'5px',color:'var(--primary)'}}><Mail size={18}/></p>
                        <h4>Invite by email</h4>
                        </div>
                        <div className="input-box">
                           <div><input placeholder="@ colleague@company.com"/></div>
                           <button>Send Invite <SendHorizonal size={18}/></button>
                        </div>
                        <p style={{fontSize:'15px',color:'var(--text-soft)'}}>Separate multiple emails with commas. Invited users will receive an email with instructions.</p>
                    </div>
                    <div className="box">
                        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                        <p style={{marginTop:'5px',color:'var(--primary)'}}><Link2 size={18}/></p>
                        <h4>Share invite link</h4>
                        </div>
                        <p style={{fontSize:'14px',color:'var(--text-soft)'}}>Anyone with this link can join your workspace as a contributor. Use this for group chats or internal wikis.</p>
                        <div className="link-box">
                           <div>https://productivityapp.io/invite/join?token=a8f2k9l1m0_prod</div>
                           <button><Copy size={18}/> Copy</button>
                        </div>
                    </div>
                    <div className="invites-table">
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',paddingLeft:'5px'}}>
                            <h5 style={{letterSpacing:'1px',color:'#728298'}}>Pending Invites</h5>
                            <p style={{color:'var(--primary)'}}>3 invites remaining this month</p>
                        </div>
                        <table>
                        <thead>
                        <tr>
                          <th>Email</th>
                          <th>Sent on</th>  
                          <th>Action</th>  
                        </tr> 
                        </thead>  
                         <tbody>
                        {invitationInfo.map((invite)=>(
                            <tr key={invite.id}>
                                <td style={{color:'black'}}>{invite.email}</td>
                                <td>{invite.sentDate}</td>
                                <td style={{color:'var(--primary)'}}>{invite.action}</td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InviteFriend;