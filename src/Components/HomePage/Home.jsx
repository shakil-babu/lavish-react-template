import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Pricing from '../Pricing/Pricing';
import {homeObjOne, homeObjTwo , homeObjOThree , homeObjFour} from './Data';
const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjOThree} />
            <Pricing/>
            <HeroSection {...homeObjFour} />
            
        </>
    )
}

export default Home
