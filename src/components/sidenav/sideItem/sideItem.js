import React from 'react';
import scss from './sideitem.module.scss';
import {handleStyle} from '../../../helpers/helperFunctions';
import DashIcon from '../../../Assets/images/dashboard.svg';
import SettingsIcon from '../../../Assets/images/settings.svg';
import AnalyticsIcon from '../../../Assets/images/analytics.svg';


const Sidenav = ({value, mode}) => {

    let iconVal;
    if(value == 'dashboard') {
        iconVal = DashIcon
    }
    if(value == 'analytics') {
        iconVal = AnalyticsIcon
    }
    if(value == 'settings') {
        iconVal = SettingsIcon
    }
    const scssArr = [scss['sideitem']];
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (
        <div className={styles}>
            <img src={iconVal} />
            <span className={scss['normal__txt']}>{value}</span>
        </div>
    )
}

export default Sidenav