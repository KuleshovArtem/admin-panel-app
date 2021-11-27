import { Checkbox } from '../../Checkbox/Checkbox';
import './TebleOrderItem.css'

export const TebleOrderItem = (props) => {
    const {
        orderId,
        orderDate,
        orderStatus,
        orderPosition,
        orderSum,
        fullNameUser,
    } = props
  
    return(
        <div className="table__header-list">
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