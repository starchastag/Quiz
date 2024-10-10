import React from 'react'
import './About.css'
import about from '../../Assest/about.png'
import play_icon from '../../Assest/play_icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
            <h3>ABOUT COLLEGE</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>Embark on a trnsformative educational journey with our college comprehensive education program . Our cutting-edge curriculum is designed to empower students with the knowledge ,skills,and experences needed to excel in the dynamic field of education .</p>
            <p>With a focus on innovation hands-on learing and personalized mentorship, our program prepare aspiring educator to make a meaningful impact in classrooms schools,and communities.</p>
            <p>Wheather you aspire to become a teacher,adminstrator counselor of educational leader, our diverse range of programs offer the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>

        </div>
    )
}

export default About