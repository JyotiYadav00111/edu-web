import React from 'react'
import './About.css'
import about_img from '../../assets/school-about.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
        </div>
        <div className="about-right">
            <h3>ABOUT SCHOOL</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative edicational journey with our school's comprehensive edication programs. Our cutting-edge currculum is designed to empower students with teh knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, conselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About
