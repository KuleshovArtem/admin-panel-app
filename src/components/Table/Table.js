import { TableHeader } from "../TableHeader/TableHeader";
import { TableBody } from "../TableBody/TableBody";
import { TableFooter } from "../TableFooter/TableFooter";

export const Table = () => {
    return(
        <div className="table">
             <TableHeader/>
             <TableBody/>
             <TableFooter/>         
        </div>
    );
};  