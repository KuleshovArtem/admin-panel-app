import {
    ORDER_FILTER_SET_ORDER_ID_FILTER, 
    ORDER_FILTER_SET_ORDER_STATUS_FILTER,
    ORDER_FILTER_SET_START_DATE_FILER,

}
 from '..//actionsTypes' 

const initState = {
    filterOrder: '',
    status: '',
    startDate: '',  
}

export function filterReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_FILTER_SET_ORDER_ID_FILTER: {
            return {
                ...initialState,
                filterOrder:action.newOrderFilter
            }
        }
        case ORDER_FILTER_SET_ORDER_STATUS_FILTER: {
            return {
                ...initialState,
                status: action.isChecked ? 'Выполнен' : '',
                // фильтрация по чекбоксу (в заголовке таблицы комент для подключения) НЕ ПОДКЛЮЧЕН
            }
        }
        case ORDER_FILTER_SET_START_DATE_FILER: {
            return {
                ...initialState,
                startDate: action.startDateFilter //условие !!! НЕ ПОДКДЮЧЕН

            }
        }
          

        default:
            return initialState     
    }
}


