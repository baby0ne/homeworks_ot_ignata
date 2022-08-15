const initState = {
   theme: 'some',
};

export const themesReducer = (state: StateType = initState, action: ActionsType): StateType => {
   switch (action.type) {
      case 'THEMES/CHANGE_THEME': {
         return {
            ...state,
            theme: action.theme,
         }
      }
      default: return state;
   }
}

export const changeThemeAC = (theme: string): any => ({ type: 'THEMES/CHANGE_THEME', theme });

//types
type StateType = {
   theme: string,
};

type ActionsType = ReturnType<typeof changeThemeAC>;