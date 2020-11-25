import React from 'react';
import scss from './solution.module.scss';
import {useMode} from '../../context';
import {handleStyle} from '../../helpers/helperFunctions';
import Btn from '../ui/button/button';

const Solution = () => {
    const scssArr = [scss['bg--primary'], scss['solution']];
    const {mode} = useMode();
    const styles = handleStyle(scssArr, mode, scss['light--mode'])
    return (
        <div className={styles}>
            <div className={[scss['content'], scss['container']].join(' ')}>
            <h1 className={[scss['h1__txt'], scss['txt--center']].join(' ')}>
            You are 3-steps away from life
            </h1>
            <p className={[scss['h2__txt'], scss['txt--center']].join(' ')}>So , Don’t wait and start now, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            <Btn title="Start now!" mode={mode} size="lg" />
            </div>
        </div>
    )
}

export default Solution