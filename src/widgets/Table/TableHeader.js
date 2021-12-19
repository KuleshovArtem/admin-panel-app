import {actions, store, OrderColumn} from '../../data'

import {TableHeaderSort} from './TableHeaderSort'
import { Checkbox } from '../../components/Checkbox/Checkbox'
import './TableHeader.css'

const {
    ID_COLUMN,
    DATE_COLUMN,
    STATUS_COLUMN,
    POSITION_COLUMN,
    SUM_COLUMN,
    FULL_NAME_USER_COLUMN,
} = OrderColumn

export const TableHeader = () => {
    return (
        <div className="table__header">
            <ul className="table__header-list">
                <li className="table__header-item">
                    <Checkbox/>
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button"
                        title='#' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(ID_COLUMN))}}
                    />
                        
                </li>
                <div className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button"
                        title='Дата' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(DATE_COLUMN))}}
                    />
                </div>
                <li className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button"
                        title='Статус' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(STATUS_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button"
                        title='Позиция' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(POSITION_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button"
                        title='Сумма' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(SUM_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        className="table__header-button" 
                        title='ФИО Покупателя' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(FULL_NAME_USER_COLUMN))}}
                    /> 
                </li>
            </ul>
        </div>
    );
};
