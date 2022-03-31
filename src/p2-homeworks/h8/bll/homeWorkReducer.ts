import { UserType } from "../HW8"

type SortUpAT = {
   type: 'sort'
   payload: 'up'
}

type SortDownAT = {
   type: 'sort'
   payload: 'down'
}

type CheckAT = {
   type: 'check'
   payload: 18
}

type ActionType = SortUpAT | SortDownAT | CheckAT;

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
   switch (action.type) {
      case 'sort': {
         if (action.payload === 'up')
            return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
         else return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
      }
      case 'check': {
         return state.filter(u => u.age >= action.payload)
      }
      default: return state
   }
}