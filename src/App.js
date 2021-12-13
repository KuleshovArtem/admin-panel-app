import React from 'react';
import { connect } from 'react-redux';

import { selectors } from './data';

import './styles/reset.css';
import './styles/style.css';
import { HeaderPage, FilterRow, TableHeader, TableOrder, TableFooter, Form } from './widgets';
import { TableFooterBunchActions,TableFooterPagination } from './widgets'
import { Pagination } from './components/Pagination/Pagination'
// import { getOrderId } from './data/selectors';

function App({ordersList,sizePege,ordersListLength,orderId}) {
  
  return (
    <div className="page">
        <div className="main-wrapper">
            <HeaderPage/>
            <FilterRow/>
            <div className="table">
              <TableHeader/>
              <TableOrder
                  ordersList={ordersList}
                />
              <div className="table__footer">
                <TableFooterBunchActions/>
                <Pagination
                sizePege={sizePege}
                totalOrders={ordersListLength.length}
              />
              </div>          
             </div>
        </div>
        <div>
          {
            orderId !== "" && (<Form/>) 
          }
        </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  
  return{
    sizePege: selectors.getSizePage(state),
    ordersList: selectors.getResultOrders(state),
    ordersListLength: selectors.getOrderList(state),
    orderId: selectors.getOrderId(state),
    
  }
}

export default connect (mapStateToProps) (App);




