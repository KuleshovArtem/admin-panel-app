import './FilterRowMain.css'
import {actions, store} from '..//..//data'

export const FilterRowMain = () => {
    return (
        <div className="filter-row-main">
            <div className="filter-group-main">
                <label className="searchbar">
                    <div className="searchbar__icon-left"></div>
                    <input 
                        className="searchbar__search-area" 
                        placeholder="Номер заказа и ФИО" 
                        onChange={(event)=>{
                            store.dispatch(actions.orderFilterSetOrderIdFilterAction(event.currentTarget.value))
                    }}/>
                </label>
                <button className="main-filter-button main-filter-button_action">
                    <div className="button__text">Фильтры</div>
                </button>
                        
                <button className="main-filter-button main-filter-button_reset">
                     <div className="button__text">Сбросить фильтры</div>
                </button>
            </div>
            <div className="filter-row__reset">
                <button className="main-filter-button main-filter-button_reset">
                    <div className="button__text">Загрузка</div>
                </button>
            </div>
        </div>
    );
};


