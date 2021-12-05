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
                <div>
                    {/* <label>
                        <input
                            type="checkbox"
                            onChange={(event) => {
                                store.dispatch(actions.orderFilterSetOrderStatusFilterAction(event.currentTarget.checked))
                            }}
                        />
                    </label> */}
                </div>
                    <Checkbox/>
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        title='#' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(ID_COLUMN))}}
                    />
                        
                </li>
                <div className="table__header-item">
                    <TableHeaderSort
                        title='Дата' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(DATE_COLUMN))}}
                    />
                </div>
                <li className="table__header-item">
                    <TableHeaderSort
                        title='Статус' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(STATUS_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        title='Позиция' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(POSITION_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        title='Сумма' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(SUM_COLUMN))}}
                    />
                </li>
                <li className="table__header-item">
                    <TableHeaderSort
                        title='ФИО Покупателя' 
                        onClick={()=> {store.dispatch(actions.OrderSortAction(FULL_NAME_USER_COLUMN))}}
                    /> 
                </li>
            </ul>
        </div>
    );
};

{/* <span className="table__header-text">Статус</span>
<svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
</svg> */}