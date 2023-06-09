import React from 'react'
import star from '../assets/star.png'
import heart from '../assets/heart.png'
import data from '../weekend'
const SecThird = () => {

    const slidLeft =() =>{
        var slider = document.getElementById('scrollElem')
        slider.scrollLeft = slider.scrollLeft+900;
    }
    const slidRight =() =>{
        var slider = document.getElementById('scrollElem')
        slider.scrollLeft = slider.scrollLeft-900;
    }

  return (
    <div className='parentSec'>
        <div className={['childSec','childSecThird'].join(" ")}>
        <div className='secHeader'>
        <p>Make plans this weekend</p>
        <div className='arrows'>
            <p>Show (339)</p>
            <img onClick={slidRight} src='https://cdn-icons-png.flaticon.com/512/2985/2985161.png' alt='leftArrow'/>
            <img onClick={slidLeft} src='https://cdn-icons-png.flaticon.com/512/5436/5436598.png' alt='rightArrow'/>
        </div>
      </div>
      <div id='scrollElem' className='mainCard'>{

        data.map((item, idx) =>{
            return(
                <div key={idx} className='cardsCity'>
                    <p style={{backgroundImage: `url(${item.background})`}}><img src={heart} alt='heart'/></p>
                    <span>
                        <img src={star} alt='star'/>
                        <span>{item.rating} · </span>
                        <span style={{color:'rgb(146, 145, 145)'}}>{item.city}</span>
                    </span>
                    <span>{item.caption}</span>
                    <span>{item.rent}<span>person</span></span>
                </div>
            )
        })
        }
        </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default SecThird
