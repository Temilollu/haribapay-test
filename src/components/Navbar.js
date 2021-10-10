import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarWrapper } from '../styles/navbar.styled'
import flag from '../assets/Coding_ChallengeFrontEnd2 (5).png'
const routes = ['products', 'Pricing', 'Support', 'Documentation', 'Login', 'Create Account']
// #6a6d85
const Navbar = () => {
    return (
        <NavbarWrapper>
            {
                routes.map(item => (
                    <Link className='link' key={item}>{item}</Link>
                ))
            }
            <img src={flag} alt="naija flag" />
        </NavbarWrapper>
    )
}

export default Navbar
