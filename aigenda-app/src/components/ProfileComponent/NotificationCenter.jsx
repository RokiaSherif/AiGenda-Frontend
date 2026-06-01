import React, { useState } from 'react';
import { ArrowLeft, BarChart2, CheckSquare, AlertCircle } from 'lucide-react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import NotificationDetails from './NotificationDetails';

const notificationsData = [
  { id: 1, type: 'statistic', title: 'See your statistic!', message: "Hello Phillip, let's see your progress in 2020, and fix it",date: "4 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 2, type: 'completed', title: 'Task completed', message: 'Well done Phillip, you have completed all the tasks for today',date: "4 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 3, type: 'alert', title: 'UI Task less than 8 days', message: 'Phillip, your assignment is less than 8 days away from reaching' ,date: "6 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 4, type: 'statistic', title: 'See your statistic!', message: "Hello Phillip, let's see your progress in 2019, and fix it" ,date: "4 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 5, type: 'completed', title: 'Task completed', message: 'Well done Phillip, you have completed all the tasks for today' ,date: "9 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 6, type: 'alert', title: 'Edit Task less than 12 days', message: 'Phillip, your assignment is less than 12 days away from' ,date: "4 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 7, type: 'alert', title: 'Photo Task less than 15 days', message: 'Phillip, your assignment is less than 15 days away' ,date: "4 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 8, type: 'completed', title: 'Task completed', message: 'Well done Phillip, you have completed all the tasks for today' ,date: "11 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 9, type: 'alert', title: 'UX Task less than 28 days', message: 'Phillip, your assignment is less than 28 days' ,date: "8 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },
  { id: 10, type: 'completed', title: 'Task completed', message: 'Well done Phillip, you have completed all the tasks for today' ,date: "19 March 2022",details: "Hello Phillip, let's see your progress in 2020, and fix it soon. Go ahead and get the best results this year. Add your tasks and time them, to make it easier." },

];

const NotificationCenter = ()=>{
    const [selectedNotif, setSelectedNotif] = useState(null);
    const navigate = useNavigate();
    const appropriateIcon = (type)=>{
        switch(type){
            case 'statistic':
                return <BarChart2 size={16}/>;
            case 'completed':
                return <CheckSquare size={16}/>;
            case 'alert':
                return <AlertCircle size={16}/>;
            default:
                return null;
        }
    }
    return(
        <div className="notifications-screen">
            <div className="notifications-header">
                <button onClick={()=>{navigate(-1)}} className="back-button"><ArrowLeft size={20}/></button>
                <h2>Notification</h2>
            </div>
            
            <div className="notifications-list">
            {notificationsData.map((notif) => (
            <div className="notification-item" key={notif.id} onClick={()=> setSelectedNotif(notif)}>
            <div className="notification-icon">
            {appropriateIcon(notif.type)}
            </div>
            <div className="notification-content">
            <h4>{notif.title}</h4>
            <p>{notif.message}</p>
            </div>
            </div>
            ))}
            </div>
            {selectedNotif && <NotificationDetails notif={selectedNotif} onClose={()=> setSelectedNotif(null)} appropriateIcon={appropriateIcon}/>}
        </div>
    )
};
export default NotificationCenter;