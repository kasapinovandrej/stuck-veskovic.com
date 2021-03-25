import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { CgBackspace } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';




const Navigation = () => {
    const [menu, setMenu] = useState(true)
    const toggleNav = () => {
        setMenu(!menu)
    }
    ////////////////menu color/////////////////////
    // const [windowHeight, setHeight] = useState('')
    // const [windowScroll, setScroll] = useState(0)
    // const [menuColor, setMenuColor] = useState('#fff')
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         setHeight(document.documentElement.clientHeight)
    //         setScroll(window.scrollY)
    //         setScroll(window.pageYOffset)
    //     })
    //     if ((windowHeight - windowHeight * 0.1) < windowScroll) {
    //         setMenuColor('#383e42')
    //     } else {
    //         setMenuColor('#fff')
    //     }
    //     return () => {
    //         window.removeEventListener('scroll', () => {
    //             setHeight(window.innerHeight)
    //             setScroll(window.scrollY)
    //         })
    //     }
    // }, [windowScroll])
    ///////////////////////////////////////////////
    return (
        <>
            {/* <button className='burger' onClick={toggleNav}>{menu ? <IoMenuOutline className='burger__icon' style={{ color: `${menuColor}` }} /> : <CgBackspace className='burger__icon' />}
            </button> */}
            {menu ? <button className='burger-btn' onClick={toggleNav}><IoMenuOutline className='burger-btn__icon' /></button> : <button className='menu-btn' onClick={toggleNav}><CgBackspace className='menu-btn__icon' /></button>}
            {menu ? null :
                <nav className="nav">
                    <div className="nav__backdrop" onClick={toggleNav}></div>
                    <div className='nav__wrap'>
                        <div className='nav__linkbox'>
                            <ul className='nav__listbox'>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/' exact className='nav__link'>STARTSEITE</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/leistungen' className='nav__link'>LEISTUNGEN</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/projekte' className='nav__link'>PROJEKTE</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/über-uns' className='nav__link'>ÜBER UNS</NavLink></li>
                                <li className='nav__list' onClick={toggleNav}><NavLink to='/kontakt' className='nav__link'>KONTAKT</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navigation;
