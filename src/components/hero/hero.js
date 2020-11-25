import React from 'react';
import scss from './hero.module.scss';
import {useMode} from '../../context';
import Btn from '../ui/button/button';
import Thumb from '../../Assets/images/thumb.png';
import {handleStyle} from '../../helpers/helperFunctions'

const Hero = () => {
    
    const {mode} = useMode();
    const scssArr = [scss['bg--primary'], scss['hero']];
    const styles = handleStyle(scssArr, mode, scss['light--mode']);
    return (

        <div className={styles}>
            <div className={[scss['content'], scss['container']].join(' ')}>
                <div className={scss['content__upper']}>
                    <div className={scss['content__upper--thumb']}>
                        <img src={Thumb} alt="hero thumb"/>
                    </div>
                    <div className={scss['content__upper--content']}>
                        <h1 className={scss['h1__txt']}>
                            The easiest time tracking solution</h1>
                        <h2 className={scss['h2__txt']}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        </h2>
                    </div>
                </div>
                <div className={scss['content__lower']}>
                    <Btn title="Start now!" mode={mode} size="lg"/>
                </div>
            </div>
        </div>
    )
}

export default Hero