import cx from 'classnames'

import styles from './Button.module.css'


export const Button = ({className,title}) => {
    return (
        <button className={className}>
            <div >{title}</div>
        </button> 
    );
};


// const s = {
//     primary: 'button',
//     secondary: 'secondary',
// }

// export const Button = ({
//     className,
//     onClick,
    
// }) => {
//     return (
//         <button className={cx(styles.primary)} onClick={onClick}  >
//             <div className="button__text">Text here</div>
//         </button> 
//     );
// };


// "button button_medium-icon button_basic"