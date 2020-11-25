import React from 'react';
import scss from './input.module.scss';
import {handleStyle} from '../../../helpers/helperFunctions';

const Input = ({elementType, shouldValidtate, invalid, entered, elementConfig, value, changed, label, mode}) => {
    
    let inputElement = null;
    const scssArr = [scss['input--group']];
    if(invalid && shouldValidtate && entered) {
        scssArr.push(scss['invalid'])
    }
    const styles = handleStyle(scssArr, mode, scss['light--mode']);

    switch(elementType) {
        case('input'):
            inputElement = <input className={scss['input']} {...elementConfig} value={value} onChange={changed}/>
            break;
        case('textarea'):
            inputElement = <textarea className={scss['input']} {...elementConfig} value={value} onChange={changed}></textarea>
            break;
        default:
            inputElement = <input className={scss['input']} {...elementConfig} value={value} onChange={changed}/>
    }

    return (
        <div className={styles}>
            <label className={[scss['label'], scss['normal__txt']].join(' ')}>{label}</label>
            {inputElement}
        </div>
    );
}

export default Input;
