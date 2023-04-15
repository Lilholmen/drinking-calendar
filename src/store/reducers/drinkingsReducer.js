const defaultState = []

const ADD_DRINKING = 'ADD_DRINKING'
const REMOVE_DRINKING = 'REMOVE_DRINKING'

export const drinkingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DRINKING:
      return [...state, action.payload]
    case REMOVE_DRINKING:
      return state.filter((drinking) => drinking.id !== action.payload)
    default: {
      return state
    }
  }
}

export const addDrinkingAction = (payload) => ({ type: ADD_DRINKING, payload })
