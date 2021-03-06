import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { CgBackspace } from 'react-icons/cg'


const Navigation = () => {
    const [menu, setMenu] = useState(true)
    const openNav = () => {
        setMenu(!menu)
    }
    const closeNav = (e) => {
        setMenu(!menu)
    }

    return (
        <>
            <button className='burger' onClick={openNav}>{menu ? <IoMenuOutline className='burger__icon' /> : <CgBackspace className='burger__icon' />}
            </button>
            {menu ? null :
                <nav className="nav">
                    <div className="nav__backdrop" onClick={closeNav}></div>
                    <div className='nav__wrap'>
                        <div className='nav__linkbox'>
                            <ul className='nav__listbox'>
                                <li className='nav__list'><a href='#' className='nav__link'>usluge</a></li>
                                <li className='nav__list'><a href='#' className='nav__link'>projekti</a></li>
                                <li className='nav__list'><a href='#' className='nav__link'>cenovnik</a></li>
                                <li className='nav__list'><a href='#' className='nav__link'>o nama</a></li>
                                <li className='nav__list'><a href='#' className='nav__link'>kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navigation;
