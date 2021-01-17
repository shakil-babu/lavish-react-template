import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import { signUp } from '../HomePage/Data'

const Signup = () => {
    return (
        <>
            <HeroSection {...signUp} />
            <Footer/>
        </>
    )
}

export default Signup
