import React from 'react'
import { NavLink } from 'react-router-dom';
import './HeroSection.css' ;
const HeroSection = ({
    lightBg, topline, lightText , lightTextDesc , headline, description , buttonLabel,
    img, alt, imgStart
}) => {
    return (
        <>
            <div className={lightBg ? 'home_heroSection' : 'home_heroSection darkBg'}>
                <div className="container">
                    <div className="row home_hero-row" style={{display:'flex' , 
                    flexDirection: imgStart =='start' ? 'row-reverse' : 'row'
                }}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topline}</div>
                            <h1 className={lightText ? 'heading': 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home_hero-subtitle':'home_hero-subtitle dark'}>{description}</p>
                            <NavLink to='/sign-up' className='btn blue btn__wide'>
                                {buttonLabel}
                            </NavLink>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home_hero-img-wrapper">
                            <img src={img} alt={alt}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection ;
