import {sortBy, slice} from 'lodash'
import { getSortColumn, getSortAscending} from "./SortSelector"
import { getFilterOrder } from "./FilterSelector";

import {getCurrentPage, getSizePage} from './PaginationSelector'

export function getOrderList(appState) {
    return appState.orderListReducer.ordersList;
}

export function getResultOrders (appState) {
    
const column = getSortColumn(appState)
const ascending  = getSortAscending (appState)
const filterOrder = getFilterOrder(appState)

let list = getOrderList(appState)

list = list.filter((order) => order.orderId.includes(filterOrder))

list = sortBy(list, column)
if (!ascending) {
    list = list.reverse();
}

const currentPage = getCurrentPage(appState)
const sizePege = getSizePage(appState)

const lastOrderIndex = currentPage * sizePege
const firstOrderIndex = lastOrderIndex - sizePege
const currentOrder = list.slice(firstOrderIndex, lastOrderIndex)

return  currentOrder}

