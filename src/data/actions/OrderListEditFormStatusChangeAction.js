import { ORDER_LIST_EDIT_FORM_STATUS_CHANGE } from "../actionsTypes" 

export function OrderListEditFormStatusChangeAction (status) {
    return {
        type: ORDER_LIST_EDIT_FORM_STATUS_CHANGE,
        status,
       
    }
}
