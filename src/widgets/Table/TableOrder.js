import {TebleOrderRow} from './TebleOrderRow'
import "./TableOrder.css"

import { selectors } from '..//..//data';
import { connect } from 'react-redux';

export function TableOrderPure ({ordersList}) {
    return (
        <div className="table__order">
            {ordersList.map((order) => <TebleOrderRow order={order}/>)}
        </div>
    );
};

const mapStateToProps = function (state) {
  
    return{
      ordersList: selectors.getResultOrders(state),  
    }
  }

  export const TableOrder = connect(mapStateToProps)(TableOrderPure);





 
