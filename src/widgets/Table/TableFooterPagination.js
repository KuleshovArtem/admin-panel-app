import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../../data/index';

import { Pagination } from "../../components/Pagination/Pagination"

import './TableFooterPagination.css';
import { compact } from 'lodash';

// import {actions, store,} from '../../data'
// import { Button } from "../../components/Button/Button"




export function TableFooterPagination (currentPage, sizePege, ordersList) {

    return (
        <div className="table__footer-pagination">
            <span>pagination</span>
            <Pagination className='pagination__button'
            sizePege={sizePege}
            totalOrders={50}
            />
        </div>
        
    )
}

// const mapStateToProps = function (state) {
//     console.log(state)
//     return{
//         currentPage: selectors.getCurrentPage(state),
//         sizePege: selectors.getSizePage(state),
//         ordersList: selectors.getResultOrders(state),
        
//     }
//   }
  
//   export default connect (mapStateToProps)(TableFooterPagination);
