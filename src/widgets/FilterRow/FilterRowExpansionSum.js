import { Input } from "../../components/Input/Input";

export const FilterRowExpansionSum = () => {
    return (
        <div className="filter-row-expansion__date-entry">
            <div className="filter-row-expansion__text">Сумма заказа</div>
            <div className="filter-row-expansion__input-group">
                <Input/>
                <Input/>
            </div>
        </div>
    )
};
