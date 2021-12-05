import { FilterRowExpansionDate } from "./FilterRowExpansionDate";
import { FilterRowExpansionStatus } from "./FilterRowExpansionStatus";
import { FilterRowExpansionSum } from "./FilterRowExpansionSum";
import {Button} from "../../components/Button/Button"
import './FilterRowExpansion.css'

export const FilterRowExpansion = () => {
    return (
        <div className="filter-row-expansion">
            <FilterRowExpansionDate/> 
            <FilterRowExpansionStatus/>  
            <FilterRowExpansionSum/>
            <Button/>     
        </div>
    );
};