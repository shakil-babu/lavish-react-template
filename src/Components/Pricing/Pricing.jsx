import React from 'react'
import PricingSection from './PricingSection';
import {priceCardOne, priceCardThree , priceCardTwo} from './PricingData'
import './Pricing.css';

const Pricing = () => {
    return (
        <>
        <section className='pricing__area'>
            <div className="pricing_container">
            <div className="d-flex">
           <PricingSection {...priceCardOne} />
            <PricingSection {...priceCardTwo} />
            <PricingSection {...priceCardThree} />
           </div>
            </div>
        </section>
             

            
        </>
    )
}

export default Pricing
