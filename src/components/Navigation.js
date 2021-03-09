import React, { useState, useEffect, useRef } from 'react';
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
    ////////////////menu color/////////////////////
    const [windowHeight, setHeight] = useState('')
    const [windowScroll, setScroll] = useState(0)
    const [menuColor, setMenuColor] = useState('#fff')
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(document.documentElement.clientHeight)
            setScroll(window.scrollY)
            setScroll(window.pageYOffset)
        })
        if ((windowHeight - windowHeight * 0.1) < windowScroll) {
            setMenuColor('#383e42')
        } else {
            setMenuColor('#fff')
        }
        return () => {
            window.removeEventListener('scroll', () => {
                setHeight(window.innerHeight)
                setScroll(window.scrollY)
            })
        }
    }, [windowScroll])
    ///////////////////////////////////////////////
    return (
        <>
            <button className='burger' onClick={openNav}>{menu ? <IoMenuOutline className='burger__icon' style={{ color: `${menuColor}` }} /> : <CgBackspace className='burger__icon' />}
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
