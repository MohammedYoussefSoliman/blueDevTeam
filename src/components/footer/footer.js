import React from 'react';
import scss from './footer.module.scss';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {useMode} from '../../context';
import {handleStyle} from '../../helpers/helperFunctions';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const Footer = ({lists}) => {
    const scssArr = [scss['bg--secondary'], scss['footer']];
    const {mode} = useMode();
    const styles = handleStyle(scssArr, mode, scss['light--mode'])
    return (
        <footer className={styles}>
            <div className={[scss['content'], scss['container']].join(' ')}>
                <div className={scss['content--left']}>
                    <Logo isFooter={true}/>
                    <p className={scss['normal__txt']}>© 2020, myteam, Inc. All Rights Reserved.</p>
                    <div className={scss['social__icons']}>
                        <Link to="facebook.com" className={[scss['social__icons--icon'], scss['bg--primary']].join(' ')}>
                            <FaFacebookF/>
                        </Link>
                        <Link to="twitter.com" className={[scss['social__icons--icon'], scss['bg--primary']].join(' ')}>
                            <FaTwitter/>
                        </Link>
                    </div>
                </div>
                <div className={scss['content--right']}>
                    {lists.map(list => (
                        <div key={list.title} className={scss['content--right__list']}>
                            <h3 className={scss['h3__txt']}>{list.title}</h3>
                            <ul className={scss['list']}>
                                {list.items.map(item =>(
                                <li key={item.name} className={scss['list__item']}>
                                <Link className={scss['normal__txt']} to={item.to}>{item.name}</Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer