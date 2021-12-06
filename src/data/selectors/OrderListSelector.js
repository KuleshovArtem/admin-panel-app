import {sortBy} from 'lodash'
import { getSortColumn, getSortAscending} from "./SortSelector"
import { getFilterOrder } from "./FilterSelector";

export function getOrderList(appState) {
    return appState.orderListReducer.ordersList;
}

export function getResultOrders (appState) {
const column = getSortColumn(appState)
const ascending  = getSortAscending (appState)
const filterOrder = getFilterOrder(appState)


let list = getOrderList(appState)
let newList = sortBy(list, column) && list.filter((order) => order.orderId.includes(filterOrder))
if (!ascending) {
         newList = newList.reverse();
     }
return newList
}

    
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