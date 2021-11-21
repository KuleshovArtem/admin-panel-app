import { ReactComponent as IconRefresh } from "../icons/refresh.svg";


const icons = [
    <IconRefresh className="button-icon"/>,
];


export const Button = () => {
    return (
        <button class="button button_medium-icon button_basic">
            <svg class="button__icon button__icon_medium button__icon_basic"></svg>
            <div class="button__text">Text here</div>
        </button> 
    );
};