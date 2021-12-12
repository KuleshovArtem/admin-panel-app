import React from 'react';
import { connect } from 'react-redux';

import { selectors } from './data';

import './styles/reset.css';
import './styles/style.css';
import { HeaderPage, FilterRow, TableHeader, TableOrder, TableFooter } from './widgets';
import { TableFooterBunchActions,TableFooterPagination } from './widgets'
import { Pagination } from './components/Pagination/Pagination'



// function App({ordersList, filterOrder, status}) {
function App({ordersList, sizePege,ordersListLength}) {
  
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
              <div className="table__footer">
                <TableFooterBunchActions/>
                <Pagination
                sizePege={sizePege}
                totalOrders={ordersListLength.length}
              />
              </div>
              {/* <TableFooter/> */}
                        
             </div>
        </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  
  return{
    // currentPage: selectors.getCurrentPage(state),
    sizePege: selectors.getSizePage(state),
    ordersList: selectors.getResultOrders(state),
    // filterOrder: state.filterReducer.filterOrder,
    // status: state.filterReducer.status,
    ordersListLength: selectors.getOrderList(state)
    
  }
}

export default connect (mapStateToProps) (App);




