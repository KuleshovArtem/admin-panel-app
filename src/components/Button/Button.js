import { Icons } from "../Icons";

export const Button = ({
    className,
    title,
    icon,
}) => {
    return (
        <button className={className} type='button'>
            {Icons[icon]!==null ? Icons[icon] : <></>} 
            <div >{title}</div>
        </button> 
    );
};


