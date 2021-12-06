import './TableHeaderSort.css';

export function TableHeaderSort ({onClick, title, className}) {
    
    return <button 
                onClick={onClick}
                className={className}
                title={title}
            >
                {title}
                    <span className="table__header-text"></span>
                    <svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
            </button>
}

