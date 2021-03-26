import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { CgBackspace } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [menu, setMenu] = useState(true)
    const toggleNav = () => {
        setMenu(!menu)
    }
    return (
        <>
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
