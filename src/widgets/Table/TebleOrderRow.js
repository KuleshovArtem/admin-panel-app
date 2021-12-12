import {actions, store} from '..//..//data'

import { Checkbox } from '../../components/Checkbox/Checkbox';
import './TebleOrderRow.css'

export function TebleOrderRow (props) {
    const {
        order: {
            orderId,
            orderDate,
            orderStatus,
            orderPosition,
            orderSum,
            fullNameUser,
        }
        
    } = props
  
    return(
        <div 
        className="table__header-list" 
        onClick={()=>store.dispatch(actions.OrderListItemClickAction(props.order))} 
        role='button'
        >
            <div className='table__header-item'>
                <Checkbox/>
            </div>
            <div className='table__header-item'>{orderId}</div>
            <div className='table__header-item'>{orderDate}</div>
            <div className='table__header-item'>{orderStatus}</div>
            <div className='table__header-item'>{orderPosition}</div>
            <div className='table__header-item'>{orderSum}</div>
            <div className='table__header-item'>{fullNameUser}</div>
        </div>
    );
};