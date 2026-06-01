import {
  ArrowLeft,
  Bell,
  HelpCircle,
  Info,
  LogOut,
  Mail,
  Monitor,
  RefreshCcw,
  Shield,
  Smartphone,
  UserPlus,
} from "lucide-react";
import "../HomeComponent/home.css";
import "./settings.css";
import { useEffect } from "react";
import SettSidebar from "./SettSidebar";
import SettingsImg from '../../assets/images/settings.png';

const Settings = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="settings-layout">
          <SettSidebar />
          <main className="settings-main">
            <img className="sett-img" src={SettingsImg}/>
          </main>
        </div>
      </main>
    </div>
  );
};
export default Settings;
