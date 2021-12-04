import { combineReducers } from 'redux'

import {filterReducer} from './filterReduсer'
import {orderListReducer} from './orderListReducer'

export default combineReducers ({
    filterReducer,
    orderListReducer
})