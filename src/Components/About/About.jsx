import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Edusity is an innovative online learning platform designed to bridge the gap between educators and learners globally. With tools for live classes, interactive content, and progress tracking, Edusity brings traditional classroom experiences to the digital space. Tailored for accessibility, it offers a flexible learning environment suited for varied educational needs.</p>
        <p>The platform supports real-time video classes, quizzes, and assignments, allowing students to engage dynamically with course materials. Edusity’s intuitive interface makes navigation easy, and its analytics tools provide valuable insights into students' progress. Additional features like content sharing and interactive whiteboards enrich the virtual learning experience.</p>
        <p></p>
      </div>
    </div>
  )
}

export default About
