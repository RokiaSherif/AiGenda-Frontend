import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Home from './components/HomeComponent/Home';
import Chatbot from "./components/ChatbotComponent/Chatbot";
import Analytics from './components/AnalyticsComponent/Analytics';
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
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/connect' element={<Connect/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/settAbout' element={<SettAbout/>}/>
        
      </Routes>
    </>
  )
}

export default App;
