import React from 'react';
import scss from './project.module.scss';
import {handleStyle} from '../../helpers/helperFunctions';
import Btn from '../ui/button/button';


const Project = ({mode}) => {
    const scssArr = [scss['project'], scss['bg--secondary']];
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (
        <div className={styles}>
            <div className={scss['project--upper']}>
                <div className={scss['project__tracks']}>
                    <div className={[scss['project__tracks--track'], scss['bg--primary']].join(' ')}>
                        <span className={scss['clock--txt']}>00:02:54</span>
                        <span className={scss['body--txt']}>current tracking</span>
                    </div>
                    <div className={[scss['project__tracks--track'], scss['bg--primary']].join(' ')}>
                        <span className={scss['clock--txt']}>01:30 hours</span>
                        <span className={scss['body--txt']}>current tracking</span>
                    </div>
                    <div className={[scss['project__tracks--track'], scss['bg--primary']].join(' ')}>
                        <span className={scss['clock--txt']}>00:02:54</span>
                        <span className={scss['body--txt']}>total project hours</span>
                    </div>
                </div>
                <div className={scss['project__details']}>
                    <Btn title="View Project details" typeText={true} />
                </div>
            </div>
            <div className={scss['project--middle']}>

            </div>
            <div className={scss['project--lower']}>

            </div>
        </div>
    )
}

export default Project