import './Input.css'

export const Input =({placeholder}) => {
    return(
        <div className="input__entry">
            <label>
                <input type='text'placeholder={placeholder} className="input__date-area" />
            </label>
        </div> 
    );
};

