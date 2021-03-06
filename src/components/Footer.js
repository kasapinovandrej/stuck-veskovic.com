import React from 'react'
import Logo from '../assets/img/logo/Logo-beli.png';
import { FiInstagram } from 'react-icons/fi';
import { RiFacebookBoxFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__wrap'>
                <div className='footer__box'>
                    <img src={Logo} alt="Logo" className='footer__logo' />
                </div>
                <div className='footer__textwrap'>
                    <div className="footer__box">
                        <div className="footer__textbox">
                            <h4>location</h4>
                            <a href="#" className='footer__link'>Novi Pazar 36300, SERBIA</a>
                            <a href="#" className='footer__link'>00381 256 2562 15</a>
                            <a href="#" className='footer__link'>stuckveskovic@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer__box">
                        <div className="footer__textbox">
                            <h4>newsleter</h4>
                            <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>FOLLOW US:</p>
                            <div>
                                <a href="#" className='footer__link'><RiFacebookBoxFill className="footer__icon" /></a><a href="#" className='footer__link'><FiInstagram className="footer__icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
