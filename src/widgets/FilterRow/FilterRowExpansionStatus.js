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

// {/* <label className="input__date" for="RowExpansionStatus"> 
//                     <div className="input__entry-field input__entry-field_empty">
//                         <input className="input__date-area input__date-area_empty" id="RowExpansionStatus" value="Введите"/> 
//                         <button className="input__button input__button_incorrect"></button>                    
//                     </div>
//                 </label> */}