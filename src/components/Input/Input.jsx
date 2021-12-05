import './Input.module.css'

export const Input =() => {
    return(
        <div className="input__entry-field">
            <label>
                <input type='text'placeholder="что-то" className="input__date-area" />
            </label>
        </div> 
    );
};



// export const Input =() => {
//     return(
//         <div class="input__entry-field input__entry-field_disabled">
//             <input class="input__date-area input__date-area_disabled"  value="06.12.2021" />
//             <button class="input__button input__button_area"> 
//                 <svg class="input_icon input_icon_disabled">
//                     <use xlink:href="#disabled"></use>
//                 </svg>  
//             </button>
//         </div> 
//     );
// };