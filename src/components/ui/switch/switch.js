import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import {useMode} from '../../../context';
import scss from './mode.module.scss';


const StyledSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 18,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: ' #1e272e',
      '&$checked': {
        transform: 'translateX(14px)',
        '& + $track': {
          opacity: 1,
          backgroundColor: '#999cad',
          borderColor: '#999cad',
        },
      },
    },
    thumb: {
      color: ' #1e272e',
      width: 14,
      height: 14,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid #6ec1f5`,
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor: '#6ec1f5'
    },
    checked: {},
  }))(Switch);


const ModeSwitcher = () => {

  const {mode, setMode} = useMode();

  const toggleMode = () => {
    setMode(!mode);
  };

  const styles = [scss['mode']]
  if(mode) {
    styles.push(scss['light--mode'])
  }

  return (
    <div className={styles.join(' ')}>
      <StyledSwitch checked={mode} onChange={toggleMode} />
      {mode && <p className={scss['normal__txt']}>Light mode</p>}
      {!mode && <p className={scss['normal__txt']}>Dark mode</p>}
    </div>
  );
}
export default ModeSwitcher