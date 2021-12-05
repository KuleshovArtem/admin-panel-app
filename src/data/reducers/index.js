import { combineReducers } from 'redux'

import {filterReducer} from './filterReduсer'
import {orderListReducer} from './orderListReducer'
import { SortReducer } from './SortRecucer'

export default combineReducers ({
    filterReducer,
    orderListReducer,
    SortReducer,
})