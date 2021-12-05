import { ORDER_SORT } from "../actionsTypes"

export function OrderSortAction (column) {
    return {
        type: ORDER_SORT,
        column,
    }
}