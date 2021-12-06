import React from 'react';
import { connect } from 'react-redux';

import { selectors } from './data';

import './styles/reset.css';
import './styles/style.css';
import { HeaderPage, FilterRow, TableHeader, TableOrder, TableFooter } from './widgets';


// function App({ordersList, filterOrder, status}) {
function App({ordersList}) {
  return (
    <div className="page">
        <div className="main-wrapper">
            <HeaderPage/>
            <FilterRow/>
            <div className="table">
              <TableHeader/>
              <TableOrder
                  // ordersList={ordersList.filter((order) => order.orderId.includes(filterOrder) && order.orderStatus.includes(status))}  рабочий вариант
                  ordersList={ordersList}
                />
              <TableFooter/>         
             </div>
        </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return{
    ordersList: selectors.getResultOrders(state),
    // filterOrder: state.filterReducer.filterOrder,
    // status: state.filterReducer.status,
    // ordersList: state.orderListReducer.ordersList,
  }
}

export default connect (mapStateToProps) (App);




