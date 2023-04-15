import { configureStore } from '@reduxjs/toolkit'
import { typesOfDrinksReducer } from './reducers/typesOfDrinksReducer'
import { drinkingsReducer } from './reducers/drinkingsReducer'
import { volumesOfDrinksReducer } from './reducers/volumesOfDrinksReducer'

const rootReducer = {
  types: typesOfDrinksReducer,
  volumes: volumesOfDrinksReducer,
  drinkings: drinkingsReducer,
}

export const store = configureStore({ reducer: rootReducer })
