import React from "react";
import {actions, store} from '..//..//data'
import './Pagination.css'

export const Pagination = ({sizePege, totalOrders}) => {

    const pageNumbers = []
    for (let i=1; i <= Math.ceil(totalOrders / sizePege); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination__list">
                {pageNumbers.map(number=> (<li  key={number}>
                    <a href='!#' className="pagination__item" onClick={()=>{
                        store.dispatch(actions.OrderPagingPageAction(number))
                    }}> 
                        {number}
                    </a>
                </li>) )}
            </ul>
        </div>
    );
};  



