import React from "react";
import style from '../Controls/Controls.module.css'

const Controls = ({onIncrement , onDecrement}) => 
    (<div className={style.Counter__controls}>
        <button className={style.Counter__button} type='button' onClick={onIncrement}>Збільшити на 1</button>
        <button className={style.Counter__button} type='button' onClick={onDecrement}>Зменшити на 1</button>
    </div>
    )


export default Controls;