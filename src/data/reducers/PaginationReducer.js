import {
    ORDER_PAGING_FIRST_PAGE,
    ORDER_PAGING_LAST_PAGE,
    ORDER_PAGING_SECOND_PAGE,
    ORDER_PAGING_THIRD_PAGE, 
} from '../actionsTypes'

const initState = {
    currentPage: 1,
    size: 10,     
}


export function PaginationReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_PAGING_FIRST_PAGE: {
            return {
                ...initialState,
                currentPage:initialState.currentPage,
                size:initialState.size
            }
        }
        default:{
            return initialState
        }
    }
}