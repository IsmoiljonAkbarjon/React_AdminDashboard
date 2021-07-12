import './sidebar.css'
import {Link} from 'react-router-dom'
import {
     LineStyle, Timeline, ChatBubbleOutline, Report,
     Feedback, MailOutline, AttachMoney,LocalMall,
     Assessment, TrendingUp, PersonOutline, Reorder
    } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcons" />
                            Home
                        </li>  
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                           Analitics
                        </li> 
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Sales
                        </li>   
                    </ul>    
                </div>   
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem active">
                                <PersonOutline className="sidebarIcons" />
                                Users
                            </li>  
                        </Link>
                        
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Reorder className="sidebarIcons" />
                               Products
                            </li> 
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcons" />
                            Transictions
                        </li>   
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcons" />
                            Reports
                        </li>
                    </ul>    
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutline className="sidebarIcons" />
                            Mail
                        </li>  
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcons" />
                           Feedbag
                        </li> 
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcons" />
                            Messages
                        </li>   
                    </ul>    
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Stuff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LocalMall className="sidebarIcons" />
                            Manage
                        </li>  
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                           Analitics
                        </li> 
                        <li className="sidebarListItem">
                            <Report className="sidebarIcons" />
                            Reports
                        </li>   
                    </ul>    
                </div> 
            </div>          
        </div>
    )
}
