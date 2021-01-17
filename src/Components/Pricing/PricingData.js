import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';

// for price-1
export const priceCardOne= {
    isBgPrimary:true , 
    isBtnBgPrimary:false,
    icon:<FaFire/>,
    pricePack:'Starter',
    price:'$8.99',
    per:'Month',
    trans:'100 Transactions',
    cashBack:'2% Cash Back',
    limit:'$10,0000 Limit',
    btnLabel:'Choose Plan'

}
// for price-2
export const priceCardTwo= {
    isBgPrimary:false , 
    isBtnBgPrimary:true,
    icon:<BsXDiamondFill/>,
    pricePack:'Gold',
    price:'$29.99',
    per:'Month',
    trans:'100 Transactions',
    cashBack:'3.5% Cash Back',
    limit:'$100,0000 Limit',
    btnLabel:'Choose Plan'

}
// for price-3
export const priceCardThree= {
    isBgPrimary:true , 
    isBtnBgPrimary:false,
    icon:<GiCrystalize/>,
    pricePack:'Diamond',
    price:'$99.99',
    per:'Month',
    trans:'unlimited Transactions',
    cashBack:'5% Cash Back',
    limit:'Unlimited Spending',
    btnLabel:'Choose Plan'

}