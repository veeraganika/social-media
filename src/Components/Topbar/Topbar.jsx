// import React from 'react'
//  import './topbar.css'
// import { FcSearch } from "react-icons/fc";
// import { FcBusinessman } from "react-icons/fc";
// import { FcSms } from "react-icons/fc";
// import { IoMdNotificationsOff } from "react-icons/io";

// const Topbar = () => {
//   return (
//     <div className="topbarContainer">
//         <div className="topbarLeft">
//             <span className="logo">Social Media </span>
//         </div>
//         <div className="topbarCenter">
//             <div className="searchbar">
//             <FcSearch size={30} className='searchIcon' />
//             <input placeholder="Search for friend,Post or video" className="searchInput height=20px"/>
//                 </div>
//                 </div>
//         <div className="topbarRight">
//             <div className="topbarLinks">
//                 <span className="topbarLink">Homepage</span>
//                 <span className="topbarLink">Timeline</span>
//             </div>
//             <div className="topbarIcons">
//                  <div className="topbarIconItem"> 
//                 <FcBusinessman size={30}/>
//                 <span className="topbarIconBadge">1</span>
//                 </div>

//                 <div className="topbarIconItem">
//                 <FcSms size={30}/>
//                     <span className="topbarIconBadge">2</span>
//                     </div>
//                 <div className="topbarIconItem">
//                 <IoMdNotificationsOff size={30}/>
//                 <span className="topbarIconBadge">3</span>
//                 </div>
//             </div>
        
//             <img src='https://th.bing.com/th?id=OIP.24UnjsufqszR2pryS4PCIAHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'alt='' className="topbarImg"/>
            
//         </div>
//         </div>
    
//   )
// }

// export default Topbar;
import React, { useState } from 'react';
import './topbar.css';
import { FcSearch } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { IoMdNotificationsOff } from "react-icons/io";

const Topbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [friends, setFriends] = useState([
    'prabha',
    'Harika',
    'Nagu',
    'Venuka',
    'Ganika',
    'Ambika',
    'kalyani'
  ]); // Example list of friends
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter friends based on search term
    const filtered = friends.filter(friend =>
      friend.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFriends(filtered);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Media</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FcSearch size={30} className='searchIcon' />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <div className="searchResults">
              {filteredFriends.length > 0 ? (
                <ul>
                  {filteredFriends.map((friend, index) => (
                    <li key={index} className="searchResultItem">
                      {friend}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No friends found</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FcBusinessman size={30} />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <FcSms size={30} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotificationsOff size={30} />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        <img
          src='https://th.bing.com/th?id=OIP.24UnjsufqszR2pryS4PCIAHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
          alt=''
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;

