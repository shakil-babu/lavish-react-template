import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import {productOne, productTwo} from '../HomePage/Data';

const Products = () => {
    return (
        <div>
            <HeroSection {...productOne} />
            <HeroSection {...productTwo} />
            <Footer/>
        </div>
    )
}

export default Products
