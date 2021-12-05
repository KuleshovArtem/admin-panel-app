import "./TableFooter.css"
import { TableFooterBunchActions } from "./TableFooterBunchActions";
import { TableFooterPagination } from "./TableFooterPagination";

export const TableFooter = () => {
    return (
        <div className="table__footer">
            <TableFooterBunchActions/>
            <TableFooterPagination/>
        </div>    
    );
};