export const FilterRowExpansion = () => {
    return (
        <div className="filter-row-expansion">
                    <div className="filter-row-expansion__date-entry">
                        <div className="filter-row-expansion__text">Дата оформления</div>
                        <div className="filter-row-expansion__input-group">

                            <label className="input__date" for="start-date"> 
                                <div className="input__entry-field input__entry-field_empty">
                                    <input className="input__date-area input__date-area_empty" id="start-date" value="Введите"/> 
                                    <button className="input__button input__button_incorrect"></button>                    
                                </div>
                            </label>

                            <label className="input__date" for="finish-date"> 
                                <div className="input__entry-field input__entry-field_empty">
                                    <input className="input__date-area input__date-area_empty" id="finish-date" value="Введите"/>
                                    <button className="input__button input__button_incorrect"></button>                     
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
    );
};