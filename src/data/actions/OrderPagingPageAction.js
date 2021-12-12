import { ORDER_PAGING_PAGE } from "../actionsTypes"

export function OrderPagingPageAction (newCurrentPage) {
    return {
        type: ORDER_PAGING_PAGE,
        newCurrentPage,
       
    }
}