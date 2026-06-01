import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Home from './components/HomeComponent/Home';
import Chatbot from "./components/ChatbotComponent/Chatbot";
import Dashboard from './components/Dashboard/Dashboard';
import Community from './components/CommunityComponent/Community';
import Connect from './components/ConnectComponent/Connect';
import Profile from './components/ProfileComponent/Profile';
import Settings from './components/SettingsComponent/Settings';
import SpaceAnalytics from './components/WorkspacesComponent/SpaceAnalytics';
import SpaceNotes from './components/WorkspacesComponent/SpaceNotes';
import SettAbout from './components/SettingsComponent/SettAbout';
import SpaceTasks from './components/WorkspacesComponent/SpaceTasks';
import MainWorkspace from './components/WorkspacesComponent/MainWorkspace';
import RestPassword from './components/Authentication/ResetPassword';
import SignConfirmEmail from './components/Authentication/SignConfirmEmail';
import SidebarofWorkspace from './components/WorkspacesComponent/SidebarofWorkspace';
import WorkspaceSettings from './components/WorkspacesComponent/WorkspaceSettings';
import WorkspaceOverview from './components/WorkspacesComponent/WorkspaceOverview';
import SpaceOverview from './components/WorkspacesComponent/SpaceOverview';
import WorkspaceTaskSpecific from './components/WorkspacesComponent/WorkspaceTaskSpecific';
import DrawNote from './components/WorkspacesComponent/DrawNote';
import TextNote from './components/WorkspacesComponent/TextNote';
import InFocusMode from './components/WorkspacesComponent/focusMode/InFocusMode';
import SessionCompletion from './components/WorkspacesComponent/focusMode/SessionCompletion';
import Setup from './components/WorkspacesComponent/focusMode/Setup';
import Logout from './components/Authentication/Logout';
import SharedSpaces from './components/CommunityComponent/SharedSpaces';
import TeamMembers from './components/CommunityComponent/TeamMembers';
import NotificationSett from './components/SettingsComponent/NotificationSett';
import InviteFriend from './components/SettingsComponent/InviteFriend';
import SettSecurity from './components/SettingsComponent/SettSecurity';
import SettHelp from './components/SettingsComponent/SettHelp';
import SystemUpdate from './components/SettingsComponent/SystemUpdate';
import NotificationCenter from './components/ProfileComponent/NotificationCenter';
function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        {/* Authentication */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/Auth/reset-pss' element={<RestPassword/>}/>
        <Route path='/Auth/confirm-email' element={<SignConfirmEmail/>}/>
        <Route path='/logout' element={<Logout/>}/>
        {/* Workspace */}
        <Route path='/workspaceoverview' element={<WorkspaceOverview/>} />
        <Route path='/mainworkspace' element={<MainWorkspace/>}/>
        <Route path='/workspaceAnalytics' element={<SpaceAnalytics/>}/>
        <Route path='/workspaceNotes' element={<SpaceNotes/>}/>
        <Route path='/workspaceTasks' element={<SpaceTasks/>}/>
        <Route path='/workspaceSidebar' element={<SidebarofWorkspace/>}/>
        <Route path='/workspaceSettings' element={<WorkspaceSettings/>}/>
        <Route path='/spaceoverview' element={<SpaceOverview/>}/>
        <Route path='/workspacetaskspecific' element={<WorkspaceTaskSpecific/>}/>
        <Route path='/drawnote' element={<DrawNote/>}/>
        <Route path='/textnote' element={<TextNote/>}/>
        {/* Focus Mode */}
        <Route path='/infocusmode' element={<InFocusMode/>}/>
        <Route path='/sessioncompleted' element={<SessionCompletion/>}/>
        <Route path='/sessionsetup' element={<Setup/>}/>
        {/*  */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* Community */}
        <Route path='/community' element={<Community/>}/>
        <Route path='/sharedspaces' element={<SharedSpaces/>}/>
        <Route path='/teammember' element={<TeamMembers/>}/>
        {/*  */}
        <Route path='/connect' element={<Connect/>}/>
        {/* chatbot */}
        <Route path='/chatbot' element={<Chatbot/>}/>
        {/* profile */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/notificationcenter' element={<NotificationCenter/>}/>
        {/* Settings */}
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/notification' element={<NotificationSett/>}/>
        <Route path='/invitefriend' element={<InviteFriend/>}/>
        <Route path='/settsecurity' element={<SettSecurity/>}/>
        <Route path='/settAbout' element={<SettAbout/>}/>
        <Route path='/settHelp' element={<SettHelp/>}/>
        <Route path='/systemupdate' element={<SystemUpdate/>}/>
      </Routes>
    </>
  )
}

export default App;
