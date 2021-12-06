import { ORDER_FILTER_CLEAR_ORDER_ID_FILTER } from "../actionsTypes"

export function orderFilterClearOrderIdFilterAction (orderFilter) {
    return {
        type: ORDER_FILTER_CLEAR_ORDER_ID_FILTER,
        orderFilter,
    }
}