// import React from 'react'
import './share.css'
import { MdPermMedia } from "react-icons/md";
import { BiSolidLabel } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className="sharetop">

         <img className='shareProfileImg' src='https://th.bing.com/th?id=OIP.pRRfyj3pXld060Bze4o0HgHaKD&w=214&h=291&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt=''/> 
       
       <input 
       placeholder='what is your mind' 
       className='shareInput'
       />
        </div>
        <hr className='shareHr'/>
        <div className='shareBottom'>
            <div className='shareOptions'>
                <div className="shareOption">
                <MdPermMedia size={30}   className='shareIcon ' />
                    <span  className='shareOptionText' >Photo or video</span>


                    <div className="shareOption">
                    <BiSolidLabel  size={30} className="shareIcon2"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <FaLocationDot   size={30} className="shareIcon3"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <FaSmile  size={30} className="shareIcon4"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        






                </div>
            </div>
            
        </div>
    </div>
    
    
  );
}

export default Share
