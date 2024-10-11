import React from 'react'
import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"


const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatum!",
        },
        {
            image: ChooseMeals,
            title: "Choose Meals",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ab?",
        },
        {
            image: DeliveryMeals,
            title: "Delivery Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt.",
        }
    ]
    return (
        <>
            <div className='work-section-wrapper'>
                <div className='work-section-top'>
                    <p className='primary-subheading'>Work</p>
                    <h1 className='primary-heading'>How it Works </h1>
                    <p className='primary-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium quasi non eligendi laudantium nisi veritatis recusandae iure nesciunt eveniet?</p>
                </div>
                <div className='work-section-bottom'>
                    {
                        workInfoData.map((data, index) => (
                            <div className='work-section-info' key={index}>
                                <div className='info-boxes-image-container' key={index}>
                                    <img src={data.image} alt="" />
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Work