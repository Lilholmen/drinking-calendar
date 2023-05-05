const defaultState = [{ name: 'coffee' }, { name: 'tea' }, { name: 'water' }]

const ADD_TYPE = 'ADD_TYPE'
const REMOVE_TYPE = 'REMOVE_TYPE'

export const typesOfDrinksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TYPE:
      return [...state, action.payload].sort()

    case REMOVE_TYPE:
      return state.filter((type) => type !== action.payload)

    default: {
      return state
    }
  }
}

export const addTypeOfDrinksAction = (payload) => ({ type: ADD_TYPE, payload })
export const removeTypeOfDrinksAction = (payload) => ({ type: REMOVE_TYPE, payload })
