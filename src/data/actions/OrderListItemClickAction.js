import { ORDER_LIST_ITEM_CLICK } from "../actionsTypes" 

export function OrderListItemClickAction (order) {
    return {
        type: ORDER_LIST_ITEM_CLICK,
        order
        
       
    }
}