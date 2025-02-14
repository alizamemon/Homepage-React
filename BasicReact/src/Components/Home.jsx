import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar></Navbar>
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt="" />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Your favourite food is dilevered Hot and Fresh!
                    </h1>
                    <p className='primary-text'>Healthy Switcher chefs do all the prep work, like peeding, chopping and marinating.So you can cook a fresh food </p>
                    <button className='secondary-button'>Order Now <FiArrowRight /></button>

                </div>
                <div className='home-image-container'>
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home