import {
    ORDER_PAGING_PAGE,
  
} from '../actionsTypes'

const initState = {
    currentPage: 1,
    size: 10,     
}


export function PaginationReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_PAGING_PAGE: {
            return {
                ...initialState,
                currentPage:action.newCurrentPage ,
                size:initialState.size
            }
        }
        default:{
            return initialState
        }
    }
}