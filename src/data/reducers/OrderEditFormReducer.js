import {
    ORDER_LIST_ITEM_CLICK,
    ORDER_LIST_EDIT_FORM_CLOSE_CLICK,
    ORDER_LIST_EDIT_FORM_NAME_CHANGE,
    ORDER_LIST_EDIT_FORM_STATUS_CHANGE,
} from '../actionsTypes'

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
                ...initState,
            }
        }
        case ORDER_LIST_EDIT_FORM_NAME_CHANGE:{
            return{
                ...initialState,
                fullNameUser: action.name,
                
            }
        }
        case ORDER_LIST_EDIT_FORM_STATUS_CHANGE:{
            return{
                ...initialState,
                orderStatus: action.status,
            }
        }
        default:{
            return initialState
        }
    }
}
