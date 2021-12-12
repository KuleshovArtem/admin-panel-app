import {ORDER_LIST_ITEM_CLICK} from '../actionsTypes'

const initState = {
    orderId: '',
    orderDate: '',
    orderStatus: '',
    orderPosition: null,
    orderSum: null,
    fullNameUser: '',
}


export function OrderEditFormReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_LIST_ITEM_CLICK: {
            return {
                ...initialState,
                ...action.order,
            }
        }
        default:{
            return initialState
        }
    }
}