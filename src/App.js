import logo from './logo.svg';
import './App.css';
import './styles/style.css'

function App() {
  return (
    <div className="page">
        <div className="main-wrapper">
            <div className="header">
                <h1 className="header__page-title">Cписок заказов</h1>
                <button className="theme-switcher__button theme-switcher__button_second">
                    <span className="button-second__text">Светлая</span>
                </button>
            </div>
            <div className="filter-row">
                <div className="filter-row-main">
                    <div className="filter-group-main">
                        <label className="searchbar" for="searchbar-main">
                            <div className="searchbar__icon-left"></div>
                            <input id="searchbar-main" class="searchbar__search-area" placeholder="Номер заказа и ФИО"/>
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
            </div>
             <div className="table">
                <div className="table__header"></div>
                <div className="table__body">контент</div>
                <div className="table__footer">element</div>
             </div>
        </div>
    </div>

  );
}

export default App;
