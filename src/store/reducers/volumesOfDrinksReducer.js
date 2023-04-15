const defaultState = [
  {
    name: '0.5',
    value: 500,
  },
  {
    name: '0.33',
    value: 330,
  },
  {
    name: '0.25',
    value: 250,
  },
]

const ADD_VOLUME = 'ADD_VOLUME'
const REMOVE_VOLUME = 'REMOVE_VOLUME'

export const volumesOfDrinksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VOLUME:
      return [...state, action.payload].sort()

    case REMOVE_VOLUME:
      return [state.filter((type) => type !== action.payload)]

    default: {
      return state
    }
  }
}

export const addVolumeOfDrinksAction = (payload) => ({ type: ADD_VOLUME, payload })
export const removeVolumeOfDrinksAction = (payload) => ({ type: REMOVE_VOLUME, payload })
