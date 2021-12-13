import {ORDER_LIST_ITEM_CLICK,ORDER_LIST_EDIT_FORM_CLOSE_CLICK} from '../actionsTypes'

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
        case ORDER_LIST_EDIT_FORM_CLOSE_CLICK:{
            return{
                ...initState
            }
        }
        default:{
            return initialState
        }
    }
}