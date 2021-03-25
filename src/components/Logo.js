import React from 'react'
import { Link } from 'react-router-dom';
import LogoImage from '../assets/img/logo/Logo-beli.png'

const Logo = () => <Link to='/'><img src={LogoImage} alt="Logo" className='home__logo' /></Link>

export default Logo
