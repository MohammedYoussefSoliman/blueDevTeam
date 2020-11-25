import React from 'react';
import scss from './sidenav.module.scss';
import {handleStyle} from '../../helpers/helperFunctions';
import ToggleMode from '../ui/switch/switch';
import Logo from '../logo/logo';
import SiddeItem from './sideItem/sideItem';


const Sidenav = ({mode}) => {
    const scssArr = [scss['sidenav']];
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (
        <div className={styles}>
            <div className={[scss['sidenav__logo'], scss['sidenav__group']].join(' ')}>
                <Logo />
            </div>
            <div className={scss['sidenav__group']}>
                <SiddeItem value="dashboard" mode={mode}/>
                <SiddeItem value="analytics" mode={mode}/>
            </div>
            <div className={scss['sidenav__group']}>
                <ToggleMode />
                <SiddeItem value="settings" mode={mode}/>
            </div>
        </div>
    )
}

export default Sidenav