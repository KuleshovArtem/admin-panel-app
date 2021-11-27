import {TebleOrderItem} from '..//TableOrder/TebleOrderItem'
import "./TableOrder.css"

export function TableOrder ({ordersList}) {
    return(
        <div className="table__order">
            {ordersList.map((order)=> <TebleOrderItem{...order}/>)}
        </div>
    );
};