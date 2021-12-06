import { ORDER_FILTER_SET_ORDER_ID_FILTER } from "../actionsTypes"

export function orderFilterSetOrderIdFilterAction (newOrderFilter) {
    return{
        type: ORDER_FILTER_SET_ORDER_ID_FILTER,
        newOrderFilter,
    }
}