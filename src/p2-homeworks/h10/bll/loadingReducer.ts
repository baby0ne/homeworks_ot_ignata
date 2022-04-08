export type LoadingStateType = {
   loading: boolean
}

type LoadingActionType = {
   type: 'SET_LOADING'
   loading: boolean
}

const initState = {
   loading: false,
}

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => {
   switch (action.type) {
      case 'SET_LOADING': {
         return { ...state, loading: action.loading };
      }
      default: return state;
   }
}

export const loadingAC = (loading: boolean): LoadingActionType => ({ type: 'SET_LOADING', loading }); 