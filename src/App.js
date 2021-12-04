import React from 'react';
import { connect } from 'react-redux';

import './styles/reset.css';
import './styles/style.css';
import { HeaderPage, FilterRow, TableHeader, TableOrder, TableFooter } from './widgets';



function App({ordersList, filterOrder, status}) {
  return (
    <div className="page">
        <div className="main-wrapper">
            <HeaderPage/>
            <FilterRow/>
            <div className="table">
              <TableHeader/>
              <TableOrder
                ordersList={ordersList.filter((order)=> order.orderId.includes(filterOrder))}
                // ordersList={ordersList.filter((order) => order.orderId.includes(filterOrder) && order.orderStatus.includes(status))}
                />
              <TableFooter/>         
             </div>
        </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return{
    filterOrder: state.filterReducer.filterOrder,
    status: state.orderListReducer.status,
    ordersList: state.orderListReducer.ordersList,
  }
}

export default connect (mapStateToProps) (App);




