import React, {useState} from 'react';
import {useMode, useUserData} from '../../../context';
import Grid from '@material-ui/core/Grid';
import {handleStyle} from '../../../helpers/helperFunctions';
import scss from './dashboard.module.scss';

// components
import Dashbody from '../../dashbody/dashbody';
import Sidenav from '../../sidenav/sidenav';


const Dashboard = () => {
    const scssArr = [scss['dashboard'], scss['bg--primary']];
    const {mode} = useMode();
    const styles = handleStyle(scssArr, mode, scss['light--mode'])

    return (
        <> 
            <Grid container spacing={0} className={styles}>
                <Grid item xs={1}>
                    <Sidenav mode={mode}/>
                </Grid>
                <Grid item xs={7} className={scss['dashboard__middle']}>
                    <Dashbody />
                </Grid>
                <Grid item xs={4} className={scss['right']}>
                    <h2 className={scss['h2__txt']}>right</h2>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard