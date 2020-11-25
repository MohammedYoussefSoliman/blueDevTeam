import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/images/clock.svg';
import scss from './logo.module.scss';
import {handleStyle} from '../../helpers/helperFunctions';

const Logo = ({mode, isFooter}) => {
    const scssArr = [scss['logo']]
    if(isFooter) {
        scssArr.push(scss['footer--logo'])
    }
    const styles = handleStyle(scssArr, mode, scss['light--mode'])
    return (
        <Link to='/' className={styles}>
            <img src={logo}/>
            <span className={scss['logo__txt']}>My team</span>
        </Link>
    )
}

export default Logo