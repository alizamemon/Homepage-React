import React from 'react'
import AboutImage from "../assets/about-background-image.png"
import AboutBackground from "../assets/about-background.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
    return (
        <div id='About'>
            <div className='about-section-container'>
                <div className='about-background-image-container'>
                    <img src={AboutBackground} alt="" />
                </div>
                <div className='about-section-image-container'>
                    <img src={AboutImage} alt="" />
                </div>
                <div className='about-section-text-container'>
                    <p className='primary-subheading'>About</p>
                    <h1 className='primary-heading'>
                        food is an important part of balanced diet
                    </h1>
                    <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea exercitationem dolorem, aspernatur eum assumenda ratione atque quae vel nisi.</p>
                    <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rerum?
                    </p>
                    <div className='about-buttons-container'>
                        <button className='secondary-button'>Learn More</button>
                        <button className='watch-video-button'><BsFillPlayCircleFill /> Watch video</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About