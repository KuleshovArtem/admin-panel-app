import { Input } from "../../components/Input/Input";
import './FilterRowExpansionStatus.css'

export const FilterRowExpansionStatus = () => {
    return (
        <div className="filterRowExpansionStatus">
            <div className="filter-row-expansion__text">Статус заказа</div>
            <div className="filter-row-expansion__input-group">
                <Input/>  
            </div>
        </div>
    )
};
