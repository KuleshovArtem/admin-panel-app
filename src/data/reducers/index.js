import { combineReducers } from 'redux';

import {filterReducer} from './filterReduсer';
import {orderListReducer} from './orderListReducer';
import { SortReducer } from './SortRecucer';
import { PaginationReducer } from './PaginationReducer';

export default combineReducers ({
    filterReducer,
    orderListReducer,
    SortReducer,
    PaginationReducer,
})