import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { AffairType } from './HW2';

type AffairPropsType = {
   // key не нужно типизировать
   affair: AffairType // need to fix any
   deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
   const deleteCallback = (_id: number) => {
      props.deleteAffairCallback(_id);
   }// need to fix

   return (
      <div>
         {props.affair.name} {props.affair.priority}
         <SuperButton
            onClick={() => deleteCallback(props.affair._id)}>
            X
         </SuperButton>
         {/* <button onClick={() => deleteCallback(props.affair._id)}>X</button> */}
      </div>
   )
}

export default Affair
