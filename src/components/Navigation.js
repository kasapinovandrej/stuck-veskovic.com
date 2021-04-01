import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { CgBackspace } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiInstagramLine, RiPhoneFill } from 'react-icons/ri';

const backdropVar = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}


const Navigation = () => {
    const [menu, setMenu] = useState(true)
    const toggleNav = () => {
        setMenu(!menu)
    }
    return (
        <>
            {menu ? <button className='burger-btn' onClick={toggleNav}><IoMenuOutline className='burger-btn__icon' /></button> : <button className='menu-btn' onClick={toggleNav}><CgBackspace className='menu-btn__icon' /></button>}
            <AnimatePresence exitBeforeEnter>
                {menu ? null :
                    <nav className="nav">
                        <motion.div className="nav__backdrop" onClick={toggleNav}
                            variants={backdropVar}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        ></motion.div>
                        <motion.div className='nav__wrap'
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100vw' }}
                            transition={{ type: "tween" }}
                        >
                            <div className='nav__linkbox'>
                                <ul className='nav__listbox'>
                                    <li className='nav__list' onClick={toggleNav}><NavLink to='/' exact className='nav__link'>STARTSEITE</NavLink></li>
                                    <li className='nav__list' onClick={toggleNav}><NavLink to='/leistungen' className='nav__link'>LEISTUNGEN</NavLink></li>
                                    <li className='nav__list' onClick={toggleNav}><NavLink to='/projekte' className='nav__link'>PROJEKTE</NavLink></li>
                                    <li className='nav__list' onClick={toggleNav}><NavLink to='/über-uns' className='nav__link'>ÜBER UNS</NavLink></li>
                                    <li className='nav__list' onClick={toggleNav}><NavLink to='/kontakt' className='nav__link'>KONTAKT</NavLink></li>
                                </ul>
                            </div>
                            <div className="nav__footer">
                                <a href="#" className="nav__footer-icons"><RiInstagramLine /></a>
                                <a href="#" className="nav__footer-icons"><RiFacebookBoxFill /></a>
                                <a href="#" className="nav__footer-icons"><RiLinkedinBoxFill /></a>
                                <a href="#" className="nav__footer-icons"><RiPhoneFill /></a>
                            </div>
                        </motion.div>
                    </nav>
                }
            </AnimatePresence>
        </>
    )
}

export default Navigation;
