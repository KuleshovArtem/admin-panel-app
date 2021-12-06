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

// export const FilterRowExpansionSum = () => {
//     return (
//         <div className="filter-row-expansion__date-entry">
//             <div className="filter-row-expansion__text">Сумма заказа</div>
//             <div className="filter-row-expansion__input-group">

//                 <label className="input__date" for="RowExpansionSum1"> 
//                     <div className="input__entry-field input__entry-field_empty">
//                         <input className="input__date-area input__date-area_empty" id="RowExpansionSum1" value="Введите"/> 
//                         <button className="input__button input__button_incorrect"></button>                    
//                     </div>
//                 </label>

//                 <label className="input__date" for="RowExpansionSum2"> 
//                     <div className="input__entry-field input__entry-field_empty">
//                         <input className="input__date-area input__date-area_empty" id="RowExpansionSum2" value="Введите"/>
//                         <button className="input__button input__button_incorrect"></button>                     
//                     </div>
//                 </label>
//             </div>
//         </div>
//     )
// };