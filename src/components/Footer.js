import React from 'react'
import Logo from '../assets/img/logo/Logo-beli.png';
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiInstagramLine } from 'react-icons/ri';
import Copyright from './Elements/Copyright';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className='footer__wrap'>
                    <div className='footer__box'>
                        <img src={Logo} alt="Logo" className='footer__logo' />
                    </div>
                    <div className='footer__textwrap'>
                        <div className="footer__box">
                            <div className="footer__textbox">
                                <h4>location</h4>
                                <a href="https://goo.gl/maps/GTzAa9W9rwz9vtoA9" target="_blank" rel="noreferrer" className='footer__link'>Eichmühle 1, 36251 BAD HERSFELD, DEUTSCHLAND</a>
                                <a href="tel:017641552816" className='footer__link'>0176 415 528 16</a>
                                <a href="mailto:stuckveskovic@yahoo.de" className='footer__link'>stuckveskovic@yahoo.de</a>
                            </div>
                        </div>
                        <div className="footer__box">
                            <div className="footer__textbox">
                                <h4>FOLGE UNS</h4>
                                {/* <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>FOLLOW US:</p> */}
                                <div>
                                    <a href="tel:017641552816" className='footer__link'><RiFacebookBoxFill className="footer__icon" /></a>
                                    <a href="tel:017641552816" className='footer__link'><RiInstagramLine className="footer__icon" /></a>
                                    <a href="tel:017641552816" className='footer__link'><RiLinkedinBoxFill className="footer__icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright
                textClass='footer__rights'
                linkClass='footer__rights--link' />
        </>
    )
}


export default Footer
