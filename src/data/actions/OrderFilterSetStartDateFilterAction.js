import { ORDER_FILTER_SET_START_DATE_FILER } from "../actionsTypes"

export function OrderFilterSetStartDateFilterAction (startDateFilter) {
    return {
        type: ORDER_FILTER_SET_START_DATE_FILER,
        startDateFilter,
    }
}