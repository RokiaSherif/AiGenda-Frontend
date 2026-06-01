import React from 'react';
import { X } from 'lucide-react';
import './profile.css';
const NotificationDetails = ({notif, onClose, appropriateIcon})=>{
    return(
        <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail-header">
          <div className="detail-title-block">
            <div className="detail-icon-box">
              {appropriateIcon(notif.type)}
            </div>
            <h3>{notif.title}</h3>
          </div>
          <button className="detail-close-btn" onClick={onClose}>
            <X size={16} color="#ffffff" />
          </button>
        </div>
        <div className="detail-body">
          <span className="detail-date">{notif.date}</span>
          <p className="detail-text">{notif.details}</p>
        </div>

      </div>
    </div>
    )
};
export default NotificationDetails;