import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC } from "./bll/themesReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
   const theme = useSelector<AppStoreType, string>( state => state.themes.theme);

   const dispatch = useDispatch();

   const onChangeCallback = (theme: string) => {
      dispatch(changeThemeAC(theme));
   }

   return (
      <div className={s[theme]}>
         <hr />
         <span className={s[theme + '-text']}>
            homeworks 12
         </span>

         <div style={{ padding: '5px 0 0 15px' }}>
            <SuperSelect
               options={themes} 
               value={theme}
               onChangeOption={onChangeCallback}/>
         </div>
         <hr />
      </div>
   );
}

export default HW12;
