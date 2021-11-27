import { TableHeader } from "./TableHeader/TableHeader";
import { TableOrder } from "./TableOrder/TableOrder";
import { TableFooter } from "./TableFooter/TableFooter";

import ordersList from '..//..//data/list.json'

export const Table = () => {
    return(
        <div className="table">
             <TableHeader/>
             <TableOrder ordersList={ordersList}/>
             <TableFooter/>         
        </div>
    );
};  