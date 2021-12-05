import './Checkbox.css'

export const Checkbox = () => {
    return(
            <div className="checkbox">
                <label className="checkbox__form">
                    <input className="checkbox__area" type="checkbox"/>
                    <svg className="checkbox__icon" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
                    </svg>
                </label>
            </div> 
    );
};
