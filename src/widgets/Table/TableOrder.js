// import React, {useState} from 'react'       
import {TebleOrderRow} from './TebleOrderRow'
import "./TableOrder.css"

// import ordersList from '../..//list.json'

export function TableOrder ({ordersList}) {
    return(
        <div className="table__order">
            {ordersList.map((order) => <TebleOrderRow {...order}/>)}
        </div>
    );
};


// export const TableOrder = () =>{
    
//     const ordersRender = ordersList.map((order) =>{
//         return(
//             <TebleOrderRow {...order}/>
//         );
//     });
//     return(
//         <div>
//             {ordersRender}
//         </div>
//     )
// }

//  <TableOrder ordersList={ordersList.filter((order) => order.orderId.includes('1'))} /> 



 
