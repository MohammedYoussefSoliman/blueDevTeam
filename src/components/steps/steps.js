import React from 'react';
import scss from './steps.module.scss';
import {useMode} from '../../context';
import {handleStyle} from '../../helpers/helperFunctions';
import RegThumb from '../../Assets/images/golden-register-icon.png';
import MailThumb from '../../Assets/images/golden-mail-icon.png';
import RocketThumb from '../../Assets/images/golden-rocket-icon.png';

const Steps = () => {
    const scssArr = [scss['bg--secondary'], scss['steps']];
    const {mode} = useMode();
    const styles = handleStyle(scssArr, mode, scss['light--mode'])
    return (
        <div className={styles}>
            <div className={[scss['content'], scss['container']].join(' ')}>
            <h1 className={[scss['h1__txt'], scss['txt--center']].join(' ')}>
            You are 3-steps away from life
            </h1>
            <ul className={scss['content__list']}>
                <li className={scss['content__list--item']}>
                    <div className={scss['step--thumb']}>
                        <img src={RegThumb} alt="register"/>
                    </div>
                    <p className={[scss['h2__txt'], scss['txt--center']].join(' ')}>Register your organisation</p>
                </li>
                <li className={scss['content__list--item']}>
                    <div className={scss['step--thumb']}>
                        <img src={MailThumb} alt="register"/>
                    </div>
                    <p className={[scss['h2__txt'], scss['txt--center']].join(' ')}>invite your team members</p>
                </li>
                <li className={scss['content__list--item']}>
                    <div className={scss['step--thumb']}>
                        <img src={RocketThumb} alt="register"/>
                    </div>
                    <p className={[scss['h2__txt'], scss['txt--center']].join(' ')}>start tracking and paying your team</p>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Steps