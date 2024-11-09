// import React from 'react'
import './rightbar.css'
import  gift from '../../../public/asset/gift.jpg'
import addpic from '../../../public/asset/addpic.jpg'
import person1 from '../../../public/asset/person1.jpg'
import person2 from '../../../public/asset/person2.jpg'
import person3 from '../../../public/asset/person3.jpg'
import person4 from '../../../public/asset/person4.jpg'

const Rightbar = () => {
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img  className='birthdayImg' src={gift} alt=''/>
          <span className='birthdayText'>
             <b>Priya,Riya</b> and<b>  3 other friends </b> birthday today

          </span>
        </div>
        <img className='rightbarAd' src={addpic} alt=''/>
        <h4 className='rightbarTitle' >  <b>  Online Friends  </b> </h4>
        <ul className='rightbarFriendList'>

<li className='rightbarFriend'>
 <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person1} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Venuka</b></span>
</li>
<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person2} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Lakshmi</b></span>

</li>

<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person3} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Ambika</b></span>
</li>
<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person4} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Ganika</b></span>
</li>
<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person3} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>mahi</b></span>
</li>
<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person3} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Satya</b></span>
</li>
<li className='rightbarFriend'>
  <div className="rightbarProfileImgContainer">
<img 
className='rightbarProfileImg' src={person3} alt=''/>
<span className='rightbarOnline'></span>
  </div>
  <span className='rightbarUsername'> <b>Lakshmi</b></span>
  
</li>


        </ul>
       </div>
    </div>
  )
}

 export default Rightbar;



