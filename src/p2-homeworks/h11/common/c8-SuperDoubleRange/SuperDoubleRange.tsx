import React, { ChangeEvent } from 'react';
import style from './SuperDoubleRange.module.css';

type SuperDoubleRangePropsType = {
   onChangeRange?: (value: [number, number]) => void
   value: [number, number]
   // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
   {
      onChangeRange, value,
      // min, max, step, disable, ...
   }
) => {
   const onChangeCallbackFirst = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeRange && onChangeRange([+e.currentTarget.value, value[1]])
   }
   const onChangeCallbackSecond = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeRange && onChangeRange([value[0], +e.currentTarget.value])
   }


   return (
      <div className={style.container}>
         <input
            type="range"
            value={value[0]}
            className={style.slider} 
            onChange={onChangeCallbackFirst}/>
         <input
            type="range"
            value={value[1]}
            className={style.slider} 
            onChange={onChangeCallbackSecond}/>
      </div>
   )
}

export default SuperDoubleRange
