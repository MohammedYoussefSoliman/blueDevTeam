import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import scss from './menuBtn.module.scss';


const MenuBtn = () => {
    return <AiOutlineMenu className={scss['menu--btn']} />
}

export default MenuBtn