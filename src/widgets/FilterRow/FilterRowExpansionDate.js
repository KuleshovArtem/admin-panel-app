import './FilterRowExpansionDate.css'
import { Input } from "../../components/Input/Input"

import {actions, store} from '..//..//data'


export const FilterRowExpansionDate = () => {
    return (
        <div className="filter-row-expansion__date-entry">
            <div className="filter-row-expansion__text">Дата оформления</div>
            <div className="filter-row-expansion__input-group">
                <Input 
                onChange={(event)=>{
                    store.dispatch(actions.OrderFilterSetStartDateFilterAction(event.currentTarget.value))
            }}/>
                <Input/>
            </div>
        </div>
    )
};


// export const FilterRowExpansionDate = () => {
//     return (
//         <div className="filter-row-expansion__date-entry">
//             <div className="filter-row-expansion__text">Дата оформления</div>
//             <div className="filter-row-expansion__input-group">
                
//                 <label className="input__date" for="FilterRowExpansionDate1" > 
//                     <div className="input__entry-field input__entry-field_empty">
//                         <input className="input__date-area input__date-area_empty" id="FilterRowExpansionDate1" value="Введите"/> 
//                         <button className="input__button input__button_incorrect"></button>                    
//                     </div>
//                 </label>

//                 <label className="input__date" for="FilterRowExpansionDate2"> 
//                     <div className="input__entry-field input__entry-field_empty">
//                         <input className="input__date-area input__date-area_empty" id="FilterRowExpansionDate2" value="Введите"/>
//                         <button className="input__button input__button_incorrect"></button>                     
//                     </div>
//                 </label>
//             </div>
//         </div>
//     )
// }