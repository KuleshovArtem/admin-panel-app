import { Icons } from "../Icons";
import './Button.css'

export const Button = ({
    className,
    text,
    icon,
    onClick,
}) => {
    return (
        <button className={`button ${className}`} type='button' onClick={onClick}>
            {Icons[icon]!==null ? Icons[icon] : <></>} 
            <div className="button_text">{text}</div>
        </button> 
    );
};


