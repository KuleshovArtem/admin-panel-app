import './FilterRowExpansionDate.css'
import { Input } from "../../components/Input/Input"

import {actions, store} from '..//..//data'
import './FilterRowExpansionDate.css'


export const FilterRowExpansionDate = () => {
    return (
        <div className="filterRowExpansionDate">
            <div className="filter-row-expansion__text">Дата оформления</div>
            <div className="filter-row-expansion__input-group">
                <Input 
                placeholder="dd.mm.dddd"
                onChange={(event)=>{
                    store.dispatch(actions.OrderFilterSetStartDateFilterAction(event.currentTarget.value))
            }}/>
                <Input
                placeholder="dd.mm.dddd"
                />
            </div>
        </div>
    )
};

