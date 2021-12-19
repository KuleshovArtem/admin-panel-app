import {
    ORDER_LIST_EDIT_FORM_SEVE_CLICK
} from '../actionsTypes'

import ordersList from '../../list.json'

const initState = {
    ordersList: ordersList,

}

export function orderListReducer (state = initState, action){
    switch(action.type){
        case ORDER_LIST_EDIT_FORM_SEVE_CLICK: {
            const updetedOrder = action.updetedOrder
            const newState = {...state}

            const foundOrder = newState.ordersList.find((order) => order.orderId === updetedOrder.orderId) 
            if(foundOrder) {
                // foundOrder.orderId = updetedOrder.orderId
                foundOrder.orderDate = updetedOrder.orderDate
                foundOrder.orderStatus = updetedOrder.orderStatus
                foundOrder.orderPosition = updetedOrder.orderPosition
                foundOrder.orderSum = updetedOrder.orderSum
                foundOrder.fullNameUser = updetedOrder.fullNameUser
                
            }

            return{ newState
                
            }
        }
        default: { 
            return state
        }
    }               
};

