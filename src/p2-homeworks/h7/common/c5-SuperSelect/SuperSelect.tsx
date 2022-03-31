import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import { OptionsType } from '../../HW7';
import style from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
   options?: OptionsType
   onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
   {
      options,
      onChange, onChangeOption,
      ...restProps
   }
) => {
   const mappedOptions: JSX.Element[] = options
      ? options.map((v, index) => <option key={index}>{v}</option>)
      : []; // map options with key

   const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      onChangeOption && onChangeOption(e ? e.currentTarget.value : '');
   }

   return (
      <select className={style.selectCss} onChange={onChangeCallback} {...restProps}>
         {mappedOptions}
      </select>
   )
}

export default SuperSelect
