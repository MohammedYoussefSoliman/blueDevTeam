import React from 'react';
import scss from './header.module.scss';
import {useMode} from '../../../context';

//components
import Logo from '../../logo/logo';
import Navbar from '../../ui/navbar/Navbar';
import Drawer from '../../ui/menuBtn/menuBtn';
import ModeSwitcher from '../../ui/switch/switch';

const Header = () => {
    const {mode} = useMode();
    let styles = [scss['header'], scss['bg--secondary']];
    if(mode) {
        styles.push(scss['light--mode']);
    }

    return (
        <header 
        className={styles.join(' ')}>
            <div className={[scss['container'], scss['header__content']].join(' ')}>
             <Logo mode={mode}/>
             <Navbar mode={mode}/>
             <Drawer mode={mode}/>
             <ModeSwitcher />
            </div>
        </header>
    )
}

export default Header