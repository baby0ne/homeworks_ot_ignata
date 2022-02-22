import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Affair from './Affair'
import { AffairsType, AffairType, FilterType } from './HW2'

type AffairsPropsType = { // need to fix any
   data: AffairsType
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
   const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair // should work
         key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
         affair={a}
         deleteAffairCallback={props.deleteAffairCallback}
      />
   ))

   const setAll = () => {
      props.setFilter('all');
   } // need to fix
   const setHigh = () => {
      props.setFilter('high');
   }
   const setMiddle = () => {
      props.setFilter('middle');
   }
   const setLow = () => {
      props.setFilter('low');
   }

   return (
      <div>

         {mappedAffairs}

         <SuperButton onClick={setAll}>
            All
         </SuperButton>
         <SuperButton onClick={setHigh}>
            High
         </SuperButton>
         <SuperButton onClick={setMiddle}>
            Middle
         </SuperButton>
         <SuperButton onClick={setLow}>
            Low
         </SuperButton>

         {/* <button onClick={setAll}>All</button>
         <button onClick={setHigh}>High</button>
         <button onClick={setMiddle}>Middle</button>
         <button onClick={setLow}>Low</button> */}
      </div>
   )
}

export default Affairs
