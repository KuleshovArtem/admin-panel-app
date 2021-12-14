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


let newList = list

newList = sortBy(list, column)
if (!ascending) {
    newList = newList.reverse();
}
newList = newList.filter((order) => order.orderId.includes(filterOrder))

const currentPage = getCurrentPage(appState)
const sizePege = getSizePage(appState)

const lastOrderIndex = currentPage * sizePege
const firstOrderIndex = lastOrderIndex - sizePege
const currentOrder = newList.slice(firstOrderIndex, lastOrderIndex)

// const totalOrders = list.length

// const pageNumbers = []
//     for (let i=1; i <= Math.ceil(totalOrders / sizePege); i++) {
//         pageNumbers.push(i)
//     }


let newNewList = currentOrder


return newNewList
}




// export function getResultOrders (appState) {
    
//     const column = getSortColumn(appState)
//     const ascending  = getSortAscending (appState)
//     const filterOrder = getFilterOrder(appState)
    
//     let list = getOrderList(appState)
    
//     const CurrentPage = getCurrentPage(appState)
//     const SizePege = getSizePage(appState)
    
//     const lastOrderIndex = CurrentPage * SizePege
//     const firstOrderIndex = lastOrderIndex - SizePege
//     const currentOrder = list.slice(firstOrderIndex, lastOrderIndex)
    
//     let newList = currentOrder
    
//     newList = sortBy(list, column) && list.filter((order) => order.orderId.includes(filterOrder))
//     if (!ascending) {
//         newList = newList.reverse();
//     }
    
    
//     return newList


// ordersList={ordersList.filter((order) => order.orderId.includes(filterOrder) && order.orderStatus.includes(status))}
// list={list.filter((order)=> order.order.Id.includes(filterOrder))}

// && list.filter((order) => order.orderId.includes(filterOrder))

// let list = getOrderList(appState)
// let newList = sortBy(list, column) 
// if (!ascending) {
//     newList = newList.reverse();
// }

// return newList
// }