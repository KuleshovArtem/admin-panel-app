import { ThemeSwitcher } from "..//..//components/ThemeSwitcher/Theme-switcher";

export const HeaderPage = () =>{
    return(
        <div className="header">
            <h1 className="header__page-title">Cписок заказов</h1>
            <ThemeSwitcher />
        </div>
    );
};