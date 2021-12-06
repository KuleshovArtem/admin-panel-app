import { ORDER_FILTER_SET_ORDER_STATUS_FILTER } from "../actionsTypes"

export function orderFilterSetOrderStatusFilterAction (isChecked) {
    return {
        type: ORDER_FILTER_SET_ORDER_STATUS_FILTER,
        isChecked,
    }
}

// чекбокс