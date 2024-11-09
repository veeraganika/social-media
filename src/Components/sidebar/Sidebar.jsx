import './sidebar.css'
import { MdRssFeed } from "react-icons/md";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { FaVideoSlash } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import {  IoCalendarClearSharp } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className= 'sidebarWrapper'>
        <ul className="sidebarList">
            <li className="sidebarListItem">
   <MdRssFeed size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
            </li>
   <li className="sidebarListItem">
            <BsFillChatSquareDotsFill size={30} className='sidebarIcon'/>
      <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
            <  FaVideoSlash size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
            </li>
   <li className="sidebarListItem">
            < MdGroups2  size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
            <IoBookmarksSharp size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
            < BsFillQuestionSquareFill size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
            <  IoCalendarClearSharp size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
            <  MdEmojiEvents size={30} className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
            <   FaGraduationCap  size={30}className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
<button className='sidebarButton '>Show More</button>
<hr className='sidebarHr'/>
<ul className="sidebarFriendList">
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> honey</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> prabha</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> rani</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> jyothi</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> sita</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> ganika</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> venuka</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> ambika</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> lakshmi</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> venu</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> kalyani</span>
    </li>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src="https://www.bing.com/th?id=OIP.-hqTACHBE6Vk-7s2IsX3WgHaFj&w=202&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=''/>
        <span className='sidebarFriendName'> manju</span>
    </li>
</ul>
    </div>
    </div>
  )
}
export default Sidebar;
