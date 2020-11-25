import React, {useState} from 'react';
import scss from './signin.module.scss';
import {Link} from 'react-router-dom';
import {useMode} from '../../context';
import {handleStyle} from '../../helpers/helperFunctions';
import Logo from "../logo/logo";
import Input from '../ui/input/input';
import Btn from '../ui/button/button';
import ProjectThumb from '../../Assets/images/projects@2x.png';


const SignIn = ({history}) => {

    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            label: 'Email',
            elementConfig: {
                type: 'email',
                placeholder: 'write your email',
            },
            value: '',
            validation: {
                required: true,
                pattern: new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")
            },
            entered: false,
            valid: false
        },
        password: {
            elementType: 'input',
            label: 'Password',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                pattern: new RegExp("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$")
                // password must contain uppercase, digit and special character
            },
            entered: false,
            valid: false
        }
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const checkValidity = (value, rules)=> {
        let isValid = true

        if(rules.required) {
            isValid = value.trim(' ') !== '' && isValid
        }
        if(rules.length) {
            isValid = value.length === 11 && isValid
        }
        if(rules.pattern) {
            isValid = rules.pattern.test(value)
        }

        return isValid

    }

    const inputChangeHandler = (event, id) => {
        const controlsForm = {...controls}
        const formElement = controlsForm[id]
        const updatedElement = {...formElement}
        updatedElement.value = event.target.value;
         updatedElement.entered = true;
         if(updatedElement.validation) {updatedElement.valid = checkValidity(updatedElement.value, updatedElement.validation)}
         controlsForm[id] = updatedElement;
        
         let isFormValid = true;
         for(let key in controlsForm) {
            isFormValid = controlsForm[key].valid && isFormValid
            }
        setControls(controlsForm)
        setIsFormValid(isFormValid)

     }

     let formArr = []
        for(let key in controls) {
            formArr.push({
                id: key,
                config: controls[key]
            })
        }
    const handleLogin = () => {
        console.log('clicked')
        history.push('/dashboard');
    }

    const scssArr = [scss['signin'], scss['bg--primary']];
    const {mode} = useMode();
    const styles = handleStyle(scssArr, mode, scss['light--mode']);

    let form = (
        <form>
            {formArr.map(formIn =><Input
            key={formIn.id}
            elementType={formIn.config.elementType}
            elementConfig={formIn.config.elementConfig}
            invalid={!formIn.config.valid}
            shouldValidtate={formIn.config.validation}
            entered={formIn.config.entered}
            value={formIn.config.value}
            label={formIn.config.label}
            mode={mode}
            changed={(e)=>{inputChangeHandler(e, formIn.id)}} />)}
            <div className={scss['signin__submit-group']}>
                <Btn signin={true} title="login" disabled={!isFormValid} clicked={handleLogin}/>
                <Link className={scss['normal__txt']}>forgot password ?</Link>
            </div>
        </form>
    )
    


    return (
        <div className={styles}>
            <div className={[scss['container'], scss['content']].join(' ')}>
                <div className={scss['content__left']}>
                    <div className={scss['content__left--logo']}>
                        <Logo />
                    </div>
                    <h1 className={scss['h1__txt']}>The easiest tracking solution is here !</h1>
                    <p className={scss['h2__txt']}>Employee time tracking software with screenshots, reporting and automated payments.</p>
                    {form}
                </div>
                <div className={scss['content__right']}>
                    <div className={scss['content__rigth--thumb']}>
                        <img src={ProjectThumb} draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn