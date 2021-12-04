import {ORDER_FILTER_SET_ORDER_ID_FILTER, ORDER_FILTER_SET_ORDER_STATUS_FILTER} from '..//actionsTypes' 

const initState = {
    filterOrder: '',
    status: '',
    

}

export function filterReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_FILTER_SET_ORDER_ID_FILTER: {
            return {
                ...initialState,
                filterOrder:action.newOrderFilter
            }
        }
        case ORDER_FILTER_SET_ORDER_STATUS_FILTER: {
            return {
                ...initialState,
                status:action.isChecked
            }
        }

        default:
            return initialState     
    }
}


