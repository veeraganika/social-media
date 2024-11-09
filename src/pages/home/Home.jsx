// import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar"
import Topbar from "../../Components/Topbar/Topbar"
import Feed from "../../Components/feed/Feed";


 import Rightbar from '../../Components/rightbar/Rightbar'
import './Home.css'

const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
<Rightbar/> 
</div>
</>
  );
}

export default Home
