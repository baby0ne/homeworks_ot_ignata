import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { OptionsType } from '../../HW7';
import style from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
   options?: OptionsType
   onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
   {
      type, name,
      options, value,
      onChange, onChangeOption,
      ...restProps
   }
) => {
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeOption && onChangeOption(e.currentTarget.value);
   }

   const mappedOptions: JSX.Element[] = options
      ? options.map((o, i) => (
         <label key={name + '-' + i}>
            <input
               className={style.optionInput}
               type={'radio'}
               value={o}
               name={name}
               onChange={onChangeCallback}
               checked={value === o}
               {...restProps}
            />
            <span className={style.option}>{o}</span>
         </label>
      ))
      : [];

   return (
      <>
         {mappedOptions}
      </>
   )
}

export default SuperRadio
