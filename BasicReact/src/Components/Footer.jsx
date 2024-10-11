import React from 'react'
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section-one'>
                <div className='footer-logo-container'>
                    <img src={Logo} alt="" />
                </div>
                <div className='footer-icons'>
                    <BsTwitter />
                    <BsYoutube />
                    <SiLinkedin />
                    <FaFacebook />
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Career</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className='footer-section-columns'>
                    <span>123-456-789</span>
                    <span>foodiefood@gmail.com</span>
                    <span>hellofood@gmail.com</span>
                    <span>tastyfood@gmail.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer