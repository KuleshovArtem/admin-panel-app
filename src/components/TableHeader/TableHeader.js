import { Checkbox } from "../Checkbox/Checkbox"
import '../TableHeader/TableHeader.css'
const IcoTriangle ={

}

export const TableHeader = () => {
    return (
        <div className="table__header">
            <ul className="table__header-list">
                <li className="table__header-item">
                    <Checkbox/>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">#</span>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">Дата</span>
                    <svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">Статус</span>
                    <svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">Позиция</span>
                    <svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">Сумма</span>
                    <svg className="table__header-img"  viewBox="0 0 16 16" fill="#EBF0F5" stroke="none">
                        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
                    </svg>
                </li>
                <li className="table__header-item">
                    <span className="table__header-text">ФИО Покупателя</span>  
                </li>
            </ul>
        </div>
    );
};