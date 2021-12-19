import { Input } from "../../components/Input/Input";

export const FilterRowExpansionStatus = () => {
    return (
        <div className="filter-row-expansion__date-entry">
            <div className="filter-row-expansion__text">Статус заказа</div>
            <div className="filter-row-expansion__input-group">
                <Input/>  
            </div>
        </div>
    )
};
