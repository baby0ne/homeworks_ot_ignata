import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
   const [value1, setValue1] = useState(0)
   const [value2, setValue2] = useState(100)

   const onChangeDoubleRange = (value: [number, number]) => {
      if (value[1] <= value1) {
         setValue2(value1);
      } else {
         setValue2(value[1]);
      }
      if (value[0] >= value2) {
         setValue1(value2);
      } else {
         setValue1(value[0]);
      }
   }

   const onChangeRange = (value: number) => {
      if (value >= value2) {
         setValue1(value2);
      } else {
         setValue1(value);
      }
   }

   return (
      <div>
         <hr />
         homeworks 11

         {/*should work (должно работать)*/}
         <div style={{ display: 'flex', justifyContent: 'space-between', width: '167px', marginBottom: '5px' }}>
            <span>{value1}</span>
            <SuperRange
               value1={value1}
               onChangeRange={onChangeRange}
            />
         </div>

         <div style={{ display: 'flex', justifyContent: 'space-between', width: '190px' }}>
            <span>{value1}</span>
            <SuperDoubleRange
               value={[value1, value2]}
               onChangeRange={onChangeDoubleRange}
            />
            <span>{value2}</span>
         </div>

         <hr />
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperRange/>*/}
         {/*<AlternativeSuperDoubleRange/>*/}
         <hr />
      </div>
   )
}

export default HW11
