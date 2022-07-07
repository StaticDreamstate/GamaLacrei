import Menu from '../../../assets/images/menu.svg'
import Img from '../../../assets/images/lacrei.png'

import React, { useState, useEffect } from 'react'

import { NavStyled } from './nav.style'
import Drawer from '@mui/material/Drawer'

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (


        <NavStyled>
            {(toggleMenu || screenWidth > 900) && (
                <ul className="list">
                    <li className="items">Quem somos</li>
                    <li className="items">Entar</li>
                    <li className="items">Ajuda</li>
                </ul>
            )}

            <button onClick={toggleNav} className="btn"><img src={Menu} alt="" /></button>
        </NavStyled>

    )
}