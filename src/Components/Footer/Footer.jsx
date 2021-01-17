import React from 'react'
import {MdFingerprint} from 'react-icons/md' ;
import {FaFacebook, FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa';
import './Footer.css';
import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer__area">
                <div className="footer__container">
                    <div className="footer__first__contents">
                        <h5>Join our exclusive membership to receive the lates news and trends</h5>
                        <p className='subtitle'>You can unsubscribe at any time</p>
                        <div className="footer__content__d-flex">
                            <input type="text" placeholder='Your Email'/>
                            <NavLink to='/' className='btn btn__outline'>Subscribe</NavLink>
                        </div>
                        </div>

                        {/* footer main contents  */}
                        <div className="footer__main__contents">
                            <div className="about__content content">
                                <h5>About Us</h5>
                                <Link to='/'>How it works</Link>
                                <Link to='/'>Tesimonials</Link>
                                <Link to='/'>Careers</Link>
                                <Link to='/'>Investoris</Link>
                                <Link to='/'>Terms and conditions</Link>
                            </div>
                            <div className="contact__content content">
                                <h5>Contact Us</h5>
                                <Link to='/'>Contact</Link>
                                <Link to='/'>Support</Link>
                                <Link to='/'>Destinations</Link>
                                <Link to='/'>Sponserships</Link>
                            </div>
                            <div className="video__content content">
                                <h5>Videos</h5>
                                <Link to='/'>Submit Video</Link>
                                <Link to='/'>Ambassadors</Link>
                                <Link to='/'>Agency</Link>
                                <Link to='/'>Influencer</Link>
                            </div>
                            <div className="socialMedia__content content">
                                <h5>Social Media</h5>
                                <Link to='/'>Instagram</Link>
                                <Link to='/'>Facebook</Link>
                                <Link to='/'>Youtube</Link>
                                <Link to='/'>Twitter</Link>
                            </div>
                        </div>

                        {/* footer last contents */}
                        <div className="footer__last__contents">
                        <div className="nav-des">
                            <MdFingerprint className='navbar-icon'/>
                            <NavLink to='/' className='navbar-logo'>LAVISH</NavLink>
                        </div>
                        <p>All right reserved LAVISH</p>

                        <div className="footer__icons">
                            <FaFacebook className='footer_icon' />
                            <FaInstagram className='footer_icon' />
                            <FaYoutube className='footer_icon' />
                            <FaTwitter className='footer_icon' />
                        </div>
                        </div>
                    
                </div>
            </footer>
        </>
    )
}

export default Footer
