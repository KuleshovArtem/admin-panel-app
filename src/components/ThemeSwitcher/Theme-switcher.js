import { ReactComponent as IconRefresh } from "../icons/refresh.svg";
import "../ThemeSwitcher/ThemeSwitcher.css"

// const icons = [
//     <IconRefresh className="button-icon"/>,
// ];

export const ThemeSwitcher = () => {
    return (
    <button className="theme-switcher__button theme-switcher__button_second">
        <IconRefresh className="button-icon"/>
        <span className="button-second__text">Светлая</span>
    </button>);
    
}