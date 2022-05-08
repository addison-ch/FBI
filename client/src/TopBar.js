import React from 'react'
import './TopBar.css'
import cat from './cat.jpg';
import banana from './banana.png';

export default function TopBar() {
  return (
      <>
    <div className="heading">
        <div className="FBI">FBI</div>
        <div className="fullName">
            <div >Facts </div>
            <div> 'Bout </div>
            <div > Ingredients </div>
        </div>
        <div className="logo"><img src={cat} alt="cat"></img>
        </div>
    </div>
    <div className="footing"> 
        <div className="sentence">Make sense of the slew of complicated words that are in your favourite foods' ingredients list and . . . .</div>
        <div className="subtitle">find out what is actually being taken into your body today!</div>
    </div>
    </>
  )
}
