import React,{Fragment, useState} from 'react'
import './Rating.css'
import { angleLeft } from 'react-icons-kit/fa' 
// import {starO} 
import {ic_star_rate} from 'react-icons-kit/md/ic_star_rate'
import {star} from 'react-icons-kit/entypo/star'
import { Icon } from 'react-icons-kit'
import {FaStar}from 'react-icons-kit/fa'

import {starHalf} from 'react-icons-kit/icomoon/starHalf'
const Rating = () => {
    
    const [rating,setrating]=useState(0)
    const [hover,sethover]=useState(null)
  return (
    <Fragment>

    <div style={{height:"800px"}}>
        {/* <h1 style={{backgroundColor:"red"}}>Rating</h1> */}
        <Icon size={40}id='' className='default' icon={angleLeft}/>

        <Icon size={40}id='star' className='default' icon={star}/>
        <Icon size={40}id='star' className='default' icon={star}/>
        <Icon size={40}id='star' className='default' icon={star}/>
                {[...Array(4)].map((starr,i)=>{
                    const ratingvalue=i+1;
                    return<label>
                        <input type='radio'name='rating' value={ratingvalue} onClick={()=>setrating(ratingvalue)}/>
                        <Icon size={40}id='star'
                        className={ratingvalue <= (  hover||rating)? "on":"off"}
                        onMouseOver={()=>sethover(ratingvalue)}
                        onMouseOut={()=>sethover(null)}
                        icon={star}
                        />
                    </label> 
                })}
            {/* <Icon size={32} icon={ic_star_rate} /> */}
            {/* <Icon size={32} icon={star} /> */}
            {/* <FaStar/> */}
    {/* <div style={{}} >

        <ReactStars 
    style={{dispaly:"flex" ,width:"100px",backgroundColor:"darkorange",height:"100px"}}
        size={40}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        onChange={ratingchange}  
        activeColor="#ffd700"
        count={2}
        
        />
    </div>r */}
    </div>
        </Fragment>
  );
}

export default Rating;