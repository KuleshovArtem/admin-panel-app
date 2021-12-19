import { ORDER_LIST_EDIT_FORM_NAME_CHANGE } from "../actionsTypes" 

export function OrderListEditFormNameChangeAction (name) {
    return {
        type: ORDER_LIST_EDIT_FORM_NAME_CHANGE,
        name,
        
       
    }
}
