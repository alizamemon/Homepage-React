import React from 'react'
import profilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
    return (
        <div id='Testimonials'>
            <div className='work-section-wrapper'>
                <div className='work-section-top'>
                    <p className='primary-subheading'>Testimonials</p>
                    <h1 className='primary-heading'>Our Clients Speak</h1>
                    <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illum cupiditate expedita voluptatem. Earum, modi. Debitis recusandae sit fugiat repellendus?</p>
                    <div className='testimonial-section-bottom'>
                        <img src={profilePic} alt="" />

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, non quos maxime ex sed rerum!</p>
                        <div className="testimonials-stars-container">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2>Augustus johnson</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonials