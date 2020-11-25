import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {handleStyle} from '../../../helpers/helperFunctions';
import scss from './btn.module.scss';

const SigninButton = withStyles((theme) => ({
    root: {
      color: '#1e272e',
      backgroundColor: '#6ec1f5',
      textTransform: 'none',
      fontSize: 18,
      fontWeight: '600',
      padding: '0.4rem 2.5rem',
      width: 188,
      '&:hover': {
        backgroundColor: '#42aaeb',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
      '&:disabled': {
        backgroundColor: 'grey',
      },
    },
  }))(Button);

  const TextButton = withStyles((theme) => ({
    root: {
      color: '#fff',
      textTransform: 'none',
      fontSize: 21,
      fontWeight: '600',
      '&:hover': {
        backgroundColor: ' #1e272e',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
      '&:disabled': {
        backgroundColor: 'grey',
      },
    },
  }))(Button);

const Btn = ({title, mode, size, clicked, disabled, signin, typeText}) => {
    const scssArr = [scss['btn__primary']];
    switch(size) {
        case 'lg':
            scssArr.push(scss['btn__lg']);
            break
        case 'md':
            scssArr.push(scss['btn__md']);
            break
        default:
            scssArr.push(scss['btn__sm'])
    }
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (
        <>
        {(!signin && !typeText) && (<Button variant="contained" onClick={clicked} disabled={disabled} className={styles}>{title}</Button>)}
        {signin && (<SigninButton variant="contained" onClick={clicked} disabled={disabled} >{title}</SigninButton>)}
        {typeText && (<TextButton onClick={clicked} disabled={disabled} >{title}</TextButton>)}
        </>
    )
}

export default Btn