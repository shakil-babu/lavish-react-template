import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pricing.css' ;

const PricingSection = ({
    isBgPrimary,
    isBtnBgPrimary,
    icon , pricePack, price, per, trans, cashBack, limit, btnLabel
}) => {
    return (
        <>
            <section className='pricing__area'>
                   <div className={isBgPrimary ? 'pricing__card primary':'pricing__card black'}>
                    <i className='card__icon'>{icon}</i>
                    <h5 className='price_pack_title'>{pricePack}</h5>
                    <h1 className='price'>{price}</h1>
                    <p className='price_per'>{per}</p>
                    <p className='transaction'>{trans}</p>
                    <p className='cashback'>{cashBack}</p>
                    <p className='price__limit'>{limit}</p>

                    <NavLink to='/services' className={isBtnBgPrimary ? 'btn btn-primary':'btn btn-dark'} >{btnLabel}</NavLink>
                   </div>
               
            </section>
        </>
    )
}

export default PricingSection
