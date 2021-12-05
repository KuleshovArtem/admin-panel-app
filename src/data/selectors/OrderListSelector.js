import {sortBy} from 'lodash'
import { getSortColumn, getSortAscending} from "./SortSelector"
// import { getFilterOrder } from "./FilterSelector";

export function getOrderList(appState) {
    return appState.orderListReducer.ordersList;
}

export function getResultOrders (appState) {
const column = getSortColumn(appState)
const ascending  = getSortAscending (appState)

let list = getOrderList(appState)
let newList = sortBy(list, column)
if (!ascending) {
    newList = newList.reverse();
}

return newList
}

    
