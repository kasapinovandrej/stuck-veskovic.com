import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { CgBackspace } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiInstagramLine, RiPhoneFill } from 'react-icons/ri';
import Copyright from './Elements/Copyright';
const backdropVar = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
const Navigation = () => {
    const [menu, setMenu] = useState(false)
    const [list, setList] = useState(false)
    const toggleNav = () => {
        setMenu(!menu)
    }
    const toggleNavList = () => {
        setList(!list)
    }
    return (
        <div>
            {menu ? <button className='menu-btn' onClick={toggleNav}><CgBackspace className='menu-btn__icon' /></button> : <button className='burger-btn' onClick={toggleNav}><IoMenuOutline className='burger-btn__icon' /></button>}
            <AnimatePresence exitBeforeEnter>
                {menu ? <nav className="nav">
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
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        <div className='nav__linkbox'>
                            <ul className='nav__listbox'>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/' exact className='nav__link'>STARTSEITE</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/leistungen' className='nav__link'>LEISTUNGEN</NavLink></li>
                                <li className='nav__list' onClick={toggleNavList}><p className='nav__link' style={{ cursor: "pointer" }}>PROJEKTE &#8626;</p></li>
                                <ul className={`nav__childlist--box ${list ? '' : 'hidden'}`}>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className='nav__link nav__link--child' to='/projekte/fassaden-hauses'>Fassaden Hauses</NavLink></li>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className=' nav__link nav__link--child' to='/projekte/akustikdecken'>Akustikdecken</NavLink></li>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className=' nav__link nav__link--child' to='/projekte/zusammenklappbares-glassystem'>Zusammenklappbares Glassystem </NavLink></li>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className=' nav__link nav__link--child' to='/projekte/modernes-badezimmer'>Modernes Badezimmer</NavLink></li>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className=' nav__link nav__link--child' to='/projekte/keramikboden'>Keramikboden</NavLink></li>
                                    <li className="nav__list nav__list--child" onClick={toggleNav}><NavLink className=' nav__link nav__link--child' to='/projekte/innenraum-des-hauses'>Innenraum Des Hauses</NavLink></li>
                                </ul>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/über-uns' className='nav__link'>ÜBER UNS</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/kontakt' className='nav__link'>KONTAKT</NavLink></li>
                            </ul>
                        </div>
                        <div className="nav__footer">
                            <div className="nav__footer--linksbox">
                                <a href="tel:017641552816" className="nav__footer--icons"><RiInstagramLine /></a>
                                <a href="tel:017641552816" className="nav__footer--icons"><RiFacebookBoxFill /></a>
                                <a href="tel:017641552816" className="nav__footer--icons"><RiLinkedinBoxFill /></a>
                                <a href="tel:017641552816" className="nav__footer--icons"><RiPhoneFill /></a>
                            </div>
                            <span className="nav__footer--span">/</span>
                            <div div className="nav__footer--textbox">
                                <Copyright
                                    textClass="nav__footer--text"
                                    linkClass="nav__footer--link" />
                            </div>

                        </div>
                    </motion.div>
                </nav> : null}
            </AnimatePresence>
        </div>
    )
}

export default Navigation;
