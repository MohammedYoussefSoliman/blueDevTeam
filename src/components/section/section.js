import React from 'react';
import scss from './section.module.scss';
import {handleStyle} from '../../helpers/helperFunctions';
import {useMode} from '../../context';
import Confused from '../../Assets/images/confused.png';
import Satisfied from '../../Assets/images/satisfied.png';


const Section = ({title, content, reverse, avatar}) => {

    const {mode} = useMode();
    const scssArr = [scss['section']];

    if(reverse) {
        scssArr.push(scss['bg--primary'], scss['reverse'])
    }else{
        scssArr.push(scss['bg--secondary'])
    }
    let thumb;
    if(avatar == "Confused") {
        thumb=Confused
    }else if(avatar == "Satisfied") {
        thumb=Satisfied
    }
    const styles = handleStyle(scssArr, mode, scss['light--mode'])
    return (
        <div className={styles}>
            <div className={[scss['content'], scss['container']].join(' ')}>
                <div className={scss['content__thumb']}>
                    <img src={thumb} alt="avatar"/>
                </div>
                <div className={scss['content__txt']}>
                    <h1 className={scss['h1__txt']}>{title}</h1>
                    <p className={scss['h2__txt']}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Section