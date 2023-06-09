import React from 'react'
import popular from '../assets/popular.webp'
import team from '../assets/team.webp'
import family from '../assets/family.webp'

const Mainsec = () => {
  const data = [{
    img: `${popular}`,
    text: 'Most popular around the world'
  }, {
    img: `${team}`,
    text: 'Great for team building'
  }, {
    img: `${family}`,
    text: 'Fun for the family'
  }]

  const slidLeft = () => {
    var slider = document.getElementById('scrollElemMain')
    slider.scrollLeft = slider.scrollLeft + 900;
  }
  const slidRight = () => {
    var slider = document.getElementById('scrollElemMain')
    slider.scrollLeft = slider.scrollLeft - 900;
  }

  return (
    <div className='parentSec'>
      <div className='SectionHead'>
        <p>New this week</p>
        <div className='arrows'>
          <img onClick={slidRight} src='https://cdn-icons-png.flaticon.com/512/2985/2985161.png' alt='leftArrow' />
          <img onClick={slidLeft} src='https://cdn-icons-png.flaticon.com/512/5436/5436598.png' alt='rightArrow' />
        </div>
      </div>
      <div id='scrollElemMain' className='mainCard'>
        <div className='card'>
          {data.map((datas, idx) => {
            return (
              <div key={idx} className='thisWeek' style={{ backgroundImage: `url(${datas.img})` }}>
                <div className='details'>
                  <div>
                    <p>Collection</p>
                    <p>{datas.text}</p>
                  </div>
                  <p>Show all</p>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className='categories'>
        <p className='scat'>
          <span>Dates</span>
          <span>Group&nbsp;size</span>
          <span>More&nbsp;filters</span>
        </p>
        <span>Great&nbsp;of&nbsp;groups</span>
        <span>Family&nbsp;-&nbsp;friendly</span>
        <span>Animals</span>
        <span>Arts&nbsp;&&nbsp;Writing</span>
        <span>Baking</span>
        <span>Cooking</span>
        <span>Dance</span>
        <span>Drink</span>
        <span>Entertainment</span>
        <span>Fitness</span>
        <span>Masic</span>
        <span>Music</span>
        <img src='https://cdn-icons-png.flaticon.com/512/5436/5436598.png' alt='rightArrow' />
      </div>
    </div>
  )
}

export default Mainsec
