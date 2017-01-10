import { combineReducers } from 'redux'

import todos from './todos'
import cars from './cars'
import bikes from './bikes'

const rootReducer = combineReducers({ cars, bikes, todos })

export default rootReducer
