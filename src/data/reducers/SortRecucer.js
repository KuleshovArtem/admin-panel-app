// import { action } from './';
import { ORDER_SORT } from '..//actionsTypes' 
import { ID_COLUMN } from '../OrderTableColumn';

const initState = {
    column: ID_COLUMN,
    ascending: true,
  }    


export function SortReducer (initialState = initState, action){
    switch(action.type) {
        case ORDER_SORT: {
            return {
                ...initialState,
                column:action.column,
                ascending: initialState.column !== action.column ? true: !initialState.ascending, 
            }
        }

        default:
            return initialState;     
    }
}
