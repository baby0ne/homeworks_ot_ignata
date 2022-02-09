import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairsType = Array<AffairType>
export type AffairType = {
   _id: number
   name: string
   priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType // need to fix any

// constants
const defaultAffairs: AffairsType = [ // need to fix any
   { _id: 1, name: 'React', priority: 'high' },
   { _id: 2, name: 'anime', priority: 'low' },
   { _id: 3, name: 'games', priority: 'low' },
   { _id: 4, name: 'work', priority: 'high' },
   { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: AffairsType, filter: FilterType): AffairsType => { // need to fix any
   if (filter === 'all') return affairs
   else return affairs.filter((el: AffairType) => el.priority === filter)// need to fix
}
export const deleteAffair = (affairs: AffairsType, _id: number): AffairsType => { // need to fix any
   return affairs.filter((el: AffairType) => el._id !== _id)// need to fix
}

function HW2() {
   const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs) // need to fix any
   const [filter, setFilter] = useState<FilterType>('all')

   const filteredAffairs = filterAffairs(affairs, filter)
   const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

   return (
      <div>
         <hr />
         homeworks 2

         {/*should work (должно работать)*/}
         <Affairs
            data={filteredAffairs}
            setFilter={setFilter}
            deleteAffairCallback={deleteAffairCallback}
         />

         <hr />
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeAffairs/>*/}
         <hr />
      </div>
   )
}

export default HW2
