import React from 'react';
import { connect } from 'react-redux';
import { selectors } from './data';

import './styles/reset.css';
import './styles/style.css';
import { HeaderPage, FilterRow, TableHeader, TableOrder, Form, TableFooterBunchActions } from './widgets';
import { Pagination } from './components/Pagination/Pagination'


function App({ordersList, sizePege,ordersListLength,}) {
  
  return (
    <div className="page">
        <div className="main-wrapper">
            <HeaderPage/>
            <FilterRow/>
            <div className="table">
              <TableHeader/>
              <TableOrder/>
              <div className="table__footer">
                <TableFooterBunchActions/>
                <Pagination
                sizePege={sizePege}
                totalOrders={ordersListLength.length}
                // totalOrders={ordersList.length}
              />
              </div>          
             </div>
        </div>
        <Form/>
    </div>
  );
}

const mapStateToProps = function (state) {
  return{
    ordersList: selectors.getResultOrders(state), 
    sizePege: selectors.getSizePage(state),
    ordersListLength: selectors.getOrderList(state),
    // orderId: selectors.getOrderId(state),
  }
}

export default connect (mapStateToProps) (App);




