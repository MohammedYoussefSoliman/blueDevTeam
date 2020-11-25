import React from 'react';

import {NavLink} from 'react-router-dom';
import scss from './navbar.module.scss';

const Navbar = ({mode}) => {

    return (
        <nav className={mode ? [scss['nav'], scss['light--mode']].join(' ') : scss['nav']}>
        <ul className={scss['nav__list']}>
            <li className={scss['nav__list--item']}>
                <NavLink to="/features" className={scss['menu__txt']} activeClassName={scss['active']}>features</NavLink>
            </li>
            <li className={scss['nav__list--item']}>
                <NavLink to='/contact' className={scss['menu__txt']} activeClassName={scss['active']}>contact us</NavLink>
            </li>
            <li className={scss['nav__list--item']}>
                <NavLink to='/sign-in' className={scss['menu__txt']} activeClassName={scss['active']}>sign in</NavLink>
            </li>
            <li className={scss['nav__list--item']}>
                <NavLink to='/sign-up' className={[scss['menu__txt'], scss['active']].join(' ')} activeClassName={scss['active']}>join now</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar