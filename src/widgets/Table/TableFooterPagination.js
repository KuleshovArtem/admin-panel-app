import { Button } from "../../components/Button/Button"
import './TableFooterPagination.css'

// import {actions, store,} from '../../data'
// import { selectors } from './data';
import Pagination from "../../components/Pagination/Pagination"

export const TableFooterPagination = () => {
    return (
        <div className="table__footer-pagination">
            <Pagination 
            // sizePege={sizePege}
            // totalOrders={OderList.lenght}
            
            />
            
        </div>
    )
}

